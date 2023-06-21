export interface User {
  id: bigint,
  firstName: string,
  lastName: string,
  age: number,
  gender: string & { length: 1 },
  email: string,
  password: string
}
