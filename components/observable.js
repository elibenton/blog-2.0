import { Runtime, Inspector } from '@observablehq/runtime'
import React, { useEffect, useRef } from 'react'
import budget from '/observable/federal-budget'

export default function App() {
  const ref = useRef()

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(budget, name => {
      if (name === 'chart') {
        return new Inspector(ref.current)
      }
    })
    return () => runtime.dispose()
  }, [])

  return (
    <>
      <h1>Hello, Observable!</h1>
      <div ref={ref} />
    </>
  )
}
