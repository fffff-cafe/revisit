"use client"

import { type FC, useState } from "react"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"
import { Button, Section } from "../components/elements"
import { ScannerModal } from "../components/features/scanner-modal"
import { useRouter } from "next/navigation"

const Page: FC = () => {
  const router = useRouter()
  const [isActiveScanner, setIsActiveScanner] = useState<boolean>(false)
  return (
    <>
      <Fireworks autorun={{ speed: 1 }} />
      <Section>
        <h2>ようこそ FFFFF Cafe へ</h2>
        <p>初めての訪問です</p>

        <Button onClick={() => setIsActiveScanner(true)}>訪問記録をする</Button>
      </Section>
      {isActiveScanner && (
        <ScannerModal
          onClose={(url) => {
            setIsActiveScanner(false)
            if (url) router.push(url)
          }}
        />
      )}
    </>
  )
}

export default Page
