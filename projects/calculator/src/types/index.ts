export type ButtonType =
  | 'special'
  | 'number'
  | 'delete'
  | 'clear'
  | 'action'
  | 'equals'

export interface Button {
  type: ButtonType
  label: string
  id: string
}
export interface ButtonProps {
  onClick: (id: string, label: string, type: string) => void
  label: string
  type: ButtonType
  id: string
}
