## React Table Context

You can create your custom table component with the help of this component. This component helps you manage and edit
table states.

Let us create and manage your table states. You just create the UI :)

### Usage:

```tsx
<TableContextProvider>
    <TableContext {...props}>
        {/* child components */}
    </TableContext>
</TableContextProvider>
```

in child component:

```tsx
// T is you data type
const {state, dispatch} = useTableContext<T>();
```

### Props

| Name         | Type                                                                                                                       | Description                                                             |
|--------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| columns      | Array of `type TableColumnType<T extends TableRecord> = { title: string; key: keyof T; dataIndex: keyof T; }` | `key` and `dataIndex` should be `keyof T`                               |

### State

> **Note:** The state includes all props

| Name          | Type                                                                                                                 | Description                                                     |
|---------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| data          | Array of `type TableRecord = { id: number } & Record<string, unknown>`                                               | `TableRecord` is default type. you should instance of `TableRecord` |
| selected      | `number[]` or `undefined`                                                                                            | Selected rows ids                                               |
| isAllSelected | `boolean`                                                                                                            | If all rows are selected it should be `true`                    |
| sort          | `type TableSortType<T extends TableRecord> = { key: keyof T; order: TableSortOrder; }`                               | Sort state type. `TableSortOrder` is `"asc" or "desc"`          |
| filters       | Array of `type TableFilterType<T extends TableRecord> = { key: keyof T; value: string or Record<string, unknown>; }` |                                                                 |
| page          | `number`                                                                                                             | Current page number. Is optional.                               |
| perPage       | `number or undefined`                                                                                                | Page size number. Is optional.                       |
| total         | `number or undefined`                                                                                                | Number of all rows. Is optional.                                    |
| from          | `number or undefined`                                                                                                |                                                                     |
| to            | `number or undefined`                                                                                                |                                                                     |

### Actions
| Type              | Payload                                                  |
|-------------------|----------------------------------------------------------|
 | set-data          | `{ data: TableRecord[], selectableItemIds?: number[] }`  |
 | set-selected      | `{ ids: number[] }`                                      |
 | toggle-selected   | `{ id: number }`                                         |
| toggle-select-all |                                                          |
| set-sort          | `TableSortType`                                          |
 | set-filter        | `TableFilterType<T extends TableRecord = TableRecord>`   |
 | set-filters       | `TableFilterType<T extends TableRecord = TableRecord>[]` |
| go-to-page        | `{ page: number }`                                       |
 | next-page         |                                                          |
| prev-page         |                                                          |
| set-pagination    | `{ page?: number; perPage?: number; total?: number, from?: number; to?: number }`  |