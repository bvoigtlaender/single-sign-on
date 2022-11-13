export type User = {
  id: number,
  name: string,
  email: string,
  password: string,
  accessRights: []
  created?: boolean,
  deleted?: boolean,
}

export type UserForm = {
  name: string,
  email: string,
  password: string
}