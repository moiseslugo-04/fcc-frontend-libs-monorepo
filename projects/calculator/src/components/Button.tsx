import type { Button, ButtonProps, ButtonType } from '../types/index.ts'
import { bgTypes } from '../utils/constants.js'

export function Button({ onClick, label, id, type }: ButtonProps) {
  const handleClick = () => onClick(id, label, type)
  return (
    <button
      id={id}
      onClick={handleClick}
      className={`${
        bgTypes[type as ButtonType] ?? 'bg-blue-300'
      } cursor-pointer w-10 h-10 p-4 rounded-full flex items-center justify-center`}
    >
      {label}
    </button>
  )
}
