import type { Button } from '@/types/index.ts'

export const Buttons: Button[] = [
  { id: 'clear', type: 'clear', label: 'AC' },
  { id: 'delete', type: 'delete', label: 'C' },
  { id: 'modulo', type: 'special', label: '%' },
  { id: 'divide', type: 'action', label: '÷' },
  { id: 'seven', type: 'number', label: '7' },
  { id: 'eight', type: 'number', label: '8' },
  { id: 'nine', type: 'number', label: '9' },
  { id: 'multiply', type: 'action', label: '*' },
  { id: 'four', type: 'number', label: '4' },
  { id: 'five', type: 'number', label: '5' },
  { id: 'six', type: 'number', label: '6' },
  { id: 'subtract', type: 'action', label: '-' },
  { id: 'one', type: 'number', label: '1' },
  { id: 'two', type: 'number', label: '2' },
  { id: 'three', type: 'number', label: '3' },
  { id: 'add', type: 'action', label: '+' },
  { id: 'zero', type: 'number', label: '0' },
  { id: 'double_zero ', type: 'number', label: '00' },
  { id: 'decimal', type: 'special', label: '.' },
  { id: 'equals', type: 'equals', label: '=' },
]

export const bgTypes = {
  special: 'bg-gray-500',
  action: 'bg-yellow-500',
  number: 'bg-blue-300',
  delete: 'bg-red-400',
  clear: 'bg-red-800',
  equals: 'bg-green-400',
}
