"use client"

import { FC, useEffect, useState } from "react"
import { Scanner } from "@yudiel/react-qr-scanner"
import { Button } from "../elements"

export const ScannerModal: FC<{
  onClose: (url?: string) => void
}> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(true)
  }, [])
  return (
    <section
      style={{
        alignItems: "center",
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100dvh",
        left: 0,
        padding: "1rem",
        position: "fixed",
        top: "3rem",
        transform: isOpen ? "translateY(0)" : "translateY(100%)",
        transition: "transform .5s",
        width: "100dvw",
      }}
    >
      <p>店のQRコードをスキャンしてください</p>
      <div
        style={{
          height: "36rem",
          width: "36rem",
        }}
      >
        <Scanner
          onScan={(result) => {
            if (result.length === 0) {
              alert(
                "QRコードが正常に読み取れませんでした。もう一度お試しください。"
              )
              return
            }
            const urlString = result.find((r) =>
              r.rawValue.startsWith(
                (process.env.NEXT_PUBLIC_HOST || "http://localhost:3000") +
                  "/visit"
              )
            )?.rawValue
            if (!urlString) {
              alert("無効なQRコードです。もう一度お試しください。")
              return
            }
            console.info("Decoded URL:", urlString)
            setTimeout(() => onClose(urlString), 500)
          }}
          onError={(error) => {
            console.error("QR code scanning error:", error)
            alert("読み取りエラーが発生しました。もう一度お試しください。")
          }}
        />
      </div>
      <Button
        onClick={() => {
          setIsOpen(false)
          setTimeout(() => onClose(), 500)
        }}
      >
        キャンセル
      </Button>
    </section>
  )
}
