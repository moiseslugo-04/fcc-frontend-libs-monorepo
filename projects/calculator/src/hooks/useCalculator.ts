import { evaluate } from 'mathjs'
import { useState } from 'react'

const OPERATORS = ['+', '-', '*', '÷', '%']

export function useCalculator() {
  const [displayValue, setDisplayValue] = useState('')
  const [error, setError] = useState<undefined | string>(undefined)

  const handleButtonClick = (id: string, label: string, type: string) => {
    if (error) {
      setDisplayValue('')
      setError(undefined)
    }
    if (id === 'equals') {
      try {
        let expression = displayValue.replace(/÷/g, '/')
        expression = expression.replace(/([+\-*/%])-([+\-*/%])/g, '$2')
        expression = expression.replace(/([+\-*/%])[+\-*/%]+/g, (match) => {
          const lastOp = match[match.length - 1]
          if (lastOp === '-' && match.length > 1) {
            return match.slice(-2)
          }
          return String(lastOp)
        })

        const result = evaluate(expression)
        const formattedResult = Number.isInteger(result)
          ? String(result)
          : String(parseFloat(result.toFixed(8)))
        setDisplayValue(formattedResult)
      } catch (err) {
        setDisplayValue('ERROR')
        setError('Error')
      }
      return
    }

    if (id === 'delete') {
      setDisplayValue((prev) => prev.slice(0, -1))
      return
    }

    if (id === 'clear') {
      setDisplayValue('')
      return
    }

    if (label === '.') {
      const parts = displayValue.split(/[\+\-\*\/÷%]/)
      const currentNumber = parts[parts.length - 1]

      if (currentNumber && currentNumber.includes('.')) {
        return
      }

      if (currentNumber === '') {
        setDisplayValue((prev) => prev + '0.')
        return
      }
    }

    if (label === '0') {
      const parts = displayValue.split(/[\+\-\*\/÷%]/)
      const currentNumber = parts[parts.length - 1]

      if (currentNumber === '0') {
        return
      }
    }

    if (OPERATORS.includes(label)) {
      const lastChar = displayValue.slice(-1)

      if (OPERATORS.includes(lastChar)) {
        if (label === '-' && lastChar !== '-') {
          setDisplayValue((prev) => prev + label)
          return
        }
        setDisplayValue((prev) => prev.slice(0, -1) + label)
        return
      }

      if (displayValue === '' && label !== '-') {
        return
      }
    }

    setDisplayValue((prev) => prev + label)
  }

  return { displayValue, handleButtonClick }
}
