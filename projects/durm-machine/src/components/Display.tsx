import { memo } from 'react'
export const Display = memo(({ text }: { text: string }) => {
  return (
    <div
      id='display'
      className='text-center mb-4 p-2 bg-dark text-white rounded'
    >
      {text}
    </div>
  )
})
