export type Note = {
  id: string,
  header: string,
  description: string
}

export interface IStore {
  noteApi: Note
}