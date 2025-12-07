"use client"

import { type FC, useState } from "react"
import Confetti from "react-confetti-boom"
import { Button, Section } from "../components/elements"
import { ScannerModal } from "../components/features/scanner-modal"
import { useRouter } from "next/navigation"

const Page: FC = () => {
  const router = useRouter()
  const [isActiveScanner, setIsActiveScanner] = useState<boolean>(false)
  return (
    <>
      <Confetti effectCount={10} />
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
