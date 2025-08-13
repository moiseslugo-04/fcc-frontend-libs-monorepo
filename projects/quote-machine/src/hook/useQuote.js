import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const API_URL = 'https://api.quotable.io/random'
export function useQuote() {
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(null)
  const getRandomQuote = useCallback(async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error('Error getting the random quote')
      const { author, _id, content } = await response.json()
      setQuote({ author, id: _id, text: content })
    } catch (error) {
      setError(error.message)
    }
  }, [])

  useEffect(() => {
    getRandomQuote()
  }, [getRandomQuote])

  return { quote, error, getRandomQuote }
}
