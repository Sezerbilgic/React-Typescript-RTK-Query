import { Button, Input } from "antd";
import React from "react";
import { usePostNoteMutation } from "../services/crud";
import { Note } from "../types/types";

const AddNote = () => {
  const
    [data, setData] = React.useState<Note>({} as unknown as Note),
    [postNote] = usePostNoteMutation(),

    updateData = (key: keyof Note, value: string) => {
      data[key] = value;
      setData(data);
    };

  return (
    <div className="addNote">
      <div className="input">
        <Input placeholder="Başlık" onChange={(e) => updateData("header", e.target.value)} />
      </div>
      <div className="input">
        <Input placeholder="İçerik" onChange={(e) => updateData("description", e.target.value)} />
      </div>
      <Button onClick={() => postNote(data)} className="button">Ekle</Button>
    </div>
  )
}

export default AddNote;