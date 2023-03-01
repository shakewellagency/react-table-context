/// <reference types="react" />
import { TableContextProps, TableRecord } from './types';
export declare const TableContext: import("react").Context<TableContextProps<TableRecord> | undefined>;
export declare const TableContextProvider: ({ children }: React.PropsWithChildren) => JSX.Element;
export declare function useTableContext<T extends TableRecord = TableRecord>(): TableContextProps<T>;
