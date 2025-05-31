"use client"

import { useEffect, useRef } from "react"

export default function DataVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const columns = Math.floor(canvas.width / 20)
    const rows = Math.floor(canvas.height / 20)

    const matrix: number[][] = Array(columns)
      .fill(0)
      .map(() => Array(rows).fill(0))

    function drawMatrix() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update matrix values
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.03) {
            matrix[i][j] = Math.random() > 0.5 ? 1 : 0
          }
        }
      }

      // Draw matrix
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const value = matrix[i][j]
          const x = i * 20
          const y = j * 20

          if (value === 1) {
            const opacity = Math.random() * 0.5 + 0.1
            ctx.fillStyle = `rgba(56, 189, 248, ${opacity})`
            ctx.fillRect(x, y, 4, 4)
          }
        }
      }
    }

    const interval = setInterval(drawMatrix, 100)

    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 -z-10 opacity-30" />
}
