import { useState } from 'react'
import { defaultMarkdown } from '../mocks/markdown'
import { useRef } from 'react'
import { useEffect } from 'react'
import { marked } from 'marked'

export function useMarkdown() {
  marked.setOptions({ breaks: true })
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const previewRef = useRef(null)
  const handleChange = ({ target }) => {
    setMarkdown(target.value)
  }
  useEffect(() => {
    if (previewRef) {
      previewRef.current.innerHTML = marked(markdown)
    }
  }, [markdown])
  return { markdown, handleChange, previewRef }
}
