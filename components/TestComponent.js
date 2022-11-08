import Link from "next/link"
import { useState } from "react"

export default function TestComponent() {
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <>
      <Link href='/'>Calculator Page</Link>
      {count > 0 ? <h2>{count}</h2> : ""}
      <button
        onClick={() => {
          setClicked(!clicked)
          setCount(count + 1)
        }}
      >
        Click me
      </button>
      {clicked ? <h2>Hello World</h2> : ""}
    </>
  )
}
