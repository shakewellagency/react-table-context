## React Table Context

You can create your custom table component with the help of this component. This component helps you manage and edit
table states.

Let us create and manage your table states. You just create the UI :)

#### Install
```
npm install react-table-context

yarn add react-table-context
```

### Usage:
Create your table component:
```tsx
import { TableProps, TableRecord } from "react-table-context";

const TableHeader: React.FC = () => {
 const {dispatch, state: {columns, sort}} = useTableContext();

 const handleOnClick = () => {
  const order = sort?.order == "asc" ? "desc" : "asc";
  dispatch({
   type: "set-sort",
   payload: {key: column.key as string, order}
  });
 };
 
 return <thead>
 <tr>
  {columns.map((column, key) => {
    if (column.type == "action") return <th />;
    
    return <th onClick={handleOnClick}>{column.title}</th>;
  })}
 </tr>
 </thead>;
}

const Table = <T extends TableRecord = TableRecord>(props: TableProps<T>) => {
 return <TableContext {...props}>
  <table>
   <TableHeader />

   {/* ... */}
  </table>
 </TableContext>;
};

export default Table;
```
Content list table:
```tsx
import {TableColumnType, useTableContext} from "react-table-context";

const columns: TableColumnType<Content>[] = [
 {title: "Title", key: "title", dataIndex: "title"},
];

const ContentListTable: React.Fc = () => {
 const {state: {sort, filters}} = useTableContext<Content>();
 const contentQuery = useContentsQuery({sort, filters});

 useEffect(() => {
   if (contentQuery.data)
    dispatch({type: "set-data", payload: {data: contentQuery.data}});
 }, [contentQuery.data]);
 
 return <Table columns={columns}/>;
};

export default ContentListTable;
```
Use content list table:
```tsx
<TableContextProvider>
    <ContentListTable />
</TableContextProvider>
```

#### Use Table Context:

```tsx
// T is your data type
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