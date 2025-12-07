"use client"

import { FC } from "react"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"

const Page: FC = () => {
  return (
    <>
      <Fireworks autorun={{ speed: 1 }} />
    </>
  )
}

export default Page
