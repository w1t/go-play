export enum ActionType {
    IMPORT_FILE = 'IMPORT_FILE',
    FILE_CHANGE = 'FILE_CHANGE',
}

export interface Action<T = any> {
    type: ActionType
    payload: T
}

export interface FileImportArgs {
    fileName: string
    contents: string
}

export type ActionTypes = keyof typeof ActionType;

