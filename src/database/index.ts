import pkg from '$/package.json'
import Dexie, { EntityTable } from 'dexie'

interface DataType {
  id: number
  value: number
}

type DataBaseType = Dexie & {
  MainTable: EntityTable<DataType, 'id'>
}

export function createDatabase() {
  // create database
  const DB = new Dexie(pkg.name) as DataBaseType

  // define table struct
  DB.version(1).stores({
    MainTable: '++id,value',
  })

  return DB
}
