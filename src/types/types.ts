export type Query = {
  id: string,
  name: string,
  surname: string,
  salary: number
}

export interface IStore {
  queryApi: Query
}