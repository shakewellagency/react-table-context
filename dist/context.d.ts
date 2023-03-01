/// <reference types="react" />
import { TableContextProps, TableProps, TableRecord } from './types';
export declare const TableContext: import("react").Context<TableContextProps<TableRecord> | undefined>;
export declare const TableContextProvider: <T extends TableRecord = TableRecord>({ children, ...props }: import("react").PropsWithChildren<TableProps<T>>) => JSX.Element;
export declare function useTableContext<T extends TableRecord = TableRecord>(): TableContextProps<T>;
