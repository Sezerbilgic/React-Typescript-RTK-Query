import { Button, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDeleteNoteMutation, useGetNotesByIdMutation, useGetNotesQuery } from "../services/crud";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const NoteList = () => {
  const
    { data, isLoading, refetch } = useGetNotesQuery(),
    [deleteNote] = useDeleteNoteMutation(),
    [getNotesById] = useGetNotesByIdMutation({
      fixedCacheKey: "shared-get-note"
    });

  return (
    <Row gutter={[16, 16]}>
      {
        data?.map(x => (
          <Col key={x.id} xs={6}>
            <Card title={x.header} extra={
              <div className="card-extra">
                <Button onClick={() => getNotesById(x.id)} style={{ marginRight: "8px" }}><EditOutlined /></Button>
                <Button onClick={() => deleteNote("15")} ><DeleteOutlined /></Button>
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