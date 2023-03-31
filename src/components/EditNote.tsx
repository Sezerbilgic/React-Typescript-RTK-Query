import { Button, Input } from "antd";
import React from "react";
import { usePutNoteMutation } from "../services/crud";
import { Note } from "../types/types";

const EditNote = ({ editData }: { editData: Note }) => {
  const
    [data, setData] = React.useState<Note>(editData),
    [putNote] = usePutNoteMutation(),

    updateData = (key: keyof Note, value: string) => {
      let _data = data;
      _data = { ...data, [key]: value }
      setData(_data);
    };

  return (
    <div className="addNote">
      <div className="input">
        <Input defaultValue={data.header} placeholder="Başlık" onChange={(e) => updateData("header", e.target.value)} />
      </div>
      <div className="input">
        <Input defaultValue={data.description} placeholder="İçerik" onChange={(e) => updateData("description", e.target.value)} />
      </div>
      <Button onClick={() => putNote({ id: data.id, body: data })} className="button">Düzenle</Button>
    </div>
  )
}

export default EditNote;