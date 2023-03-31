import { Button, Card, Col, Row } from "antd";
import React from "react";
import { useDeleteNoteMutation, useGetNotesQuery } from "../services/crud";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const NoteList = ({ editFunction }: { editFunction: (id: string) => any }) => {
  const
    { data, isLoading } = useGetNotesQuery(),
    [deleteNote] = useDeleteNoteMutation()

  return (
    <Row gutter={[16, 16]}>
      {
        data?.map(x => (
          <Col key={x.id} xs={6}>
            <Card title={x.header} extra={
              <div className="card-extra">
                <Button onClick={() => editFunction(x.id)} style={{ marginRight: "8px" }}><EditOutlined /></Button>
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