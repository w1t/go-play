export enum VimMode {
  Visual = 'visual',
  Normal = 'normal',
  Insert = 'insert',
  Replace = 'replace'
}

export enum VimSubMode {
  Linewise = 'linewise',
  Blockwise = 'blockwise'
}

export type Dispatch = <V=any,T=string>(v:{type: T, payload?: V}) => void;

export interface VimState {
  mode: VimMode
  subMode?: VimSubMode
  keyBuffer?: string
  commandStarted?: boolean
  confirmMessage?: string
}
