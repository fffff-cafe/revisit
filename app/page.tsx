"use client"

import { type FC, useState } from "react"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"
import { Button } from "../components/elements"
import { ScannerModal } from "../components/features/scanner-modal"

const Page: FC = () => {
  const [isActiveScanner, setIsActiveScanner] = useState<boolean>(false)
  return (
    <>
      <Fireworks autorun={{ speed: 1 }} />
      <section
        style={{
          alignItems: "center",
          background: "#222",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "36rem",
          padding: "2rem 1rem",
          width: "100%",
        }}
      >
        <h2>ようこそ FFFFF Cafe へ</h2>
        <p>初めての訪問です</p>

        <Button onClick={() => setIsActiveScanner(true)}>訪問記録をする</Button>
      </section>
      {isActiveScanner && (
        <ScannerModal onClose={() => setIsActiveScanner(false)} />
      )}
    </>
  )
}

export default Page
