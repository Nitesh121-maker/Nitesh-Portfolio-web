"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export default function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText === texts[currentIndex]) {
        // Finished typing current text
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetween)
      } else {
        // Still typing
        const nextChar = texts[currentIndex].slice(0, displayText.length + 1)
        timeout = setTimeout(() => {
          setDisplayText(nextChar)
        }, typingSpeed)
      }
    } else {
      if (displayText === "") {
        // Finished deleting, move to next text
        const nextIndex = (currentIndex + 1) % texts.length
        setCurrentIndex(nextIndex)
        setIsTyping(true)
      } else {
        // Still deleting
        const remainingText = displayText.slice(0, -1)
        timeout = setTimeout(() => {
          setDisplayText(remainingText)
        }, deletingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
