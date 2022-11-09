import Link from "next/link"
import { useState } from "react"

export default function TestComponent() {
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <>
      <Link href='/'>Calculator Page</Link>
      <button
        id='countButton'
        onClick={() => {
          setClicked(!clicked)
          setCount(count + 1)
        }}
      >
        Click me
      </button>
      {clicked ? <h2 id='hello'>Hello World {count}</h2> : ""}
    </>
  )
}
