import { Button, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { noteApi, useDeleteNoteMutation, useGetNotesByIdMutation, useGetNotesQuery } from "../services/crud";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const NoteList = () => {
  const
    { data, isLoading, refetch } = useGetNotesQuery(),
    [deleteNote] = useDeleteNoteMutation(),
    [getNotesById] = useGetNotesByIdMutation({
      fixedCacheKey: "shared-get-note"
    });
  /*   const { data: selectorData } = useSelector(noteApi.endpoints.getNotes.select());
    console.log(selectorData); */
  return (
    <Row gutter={[16, 16]}>
      {
        data?.map(x => (
          <Col key={x.id} xs={6}>
            <Card title={x.header} extra={
              <div className="card-extra">
                <Button onClick={() => getNotesById(x.id)} style={{ marginRight: "8px" }}><EditOutlined /></Button>
                <Button onClick={() => deleteNote(x.id)} ><DeleteOutlined /></Button>
              </div>
            } >
              <p>{x.description}</p>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default NoteList;