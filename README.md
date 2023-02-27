## React Table Context

You can create your custom table component with the help of this component. This component helps you manage and edit
table states.

Let us create and manage your table states. You just create the UI :)

### Usage:

```tsx
<TableContextProvider {...props}>
  {/* child components */}
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
| data         | Array of `type TableRecord = { id: number } & Record<string, unknown>`                                                     | `TableRecord` is default type. you should instance of `TableRecord`     |
| columns      | Array of `type TableColumnType<T extends TableRecord> = { title: string; key: keyof T; dataIndex: keyof T; }` | `key` and `dataIndex` should be `keyof T`                               |
| isSelectable | `boolean`                                                                                                                  | If you need checkbox in your table should be `true`. default is `false` |
| selected     | `number[]` or `undefined`                                                                                                  | Selected rows ids                                                       |

### State
> **Note:** The state includes all props

| Name          | Type                                                                                                                             | Description                                          |
|---------------|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| isAllSelected | `boolean`                                                                                                                        | If all rows are selected it should be `true`         |
| sort          | `type TableSortType<T extends TableRecord> = { key: keyof T; order: TableSortOrder; }`                              | Sort state type. `TableSortOrder` is `"asc" or "desc"` |
| filters | Array of `type TableFilterType<T extends TableRecord> = { key: keyof T; value: string or Record<string, unknown>; }` |                                                      |