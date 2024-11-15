import { createDatabase } from '.'

export async function fetchGet() {
  const db = createDatabase()
  const data = await db.MainTable.filter(() => true).first()
  return data?.value
}

export async function fetchUpdate(val: number) {
  const db = createDatabase()
  await db.MainTable.filter(() => true).modify((v) => {
    v.value = val
  })
  return db.MainTable.filter(() => true).first()
}
