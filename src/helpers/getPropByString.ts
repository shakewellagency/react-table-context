import { TableRecord } from '../types'

export const getPropByString = (obj: TableRecord, propString: string): string | React.ReactNode => {
  if (!propString) throw Error

  let record = obj

  let prop
  let i, iLen
  const props = propString.split('.')

  for (i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i]

    const candidate = record[prop] as TableRecord
    if (candidate !== undefined) record = candidate
    else break
  }

  return record ? (record[props[i]] as string | React.ReactNode) : undefined
}
