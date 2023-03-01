import { TableRecord, TableState } from './types';
import { TableAction } from './action';
export declare const initialState: TableState;
export declare const createTableReducer: <T extends TableRecord = TableRecord>() => (state: TableState<T>, action: TableAction) => TableState<T>;
