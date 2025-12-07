"use client"

import { FC } from "react"
import { Scanner } from "@yudiel/react-qr-scanner"
import { Button } from "../elements"

export const ScannerModal: FC<{ onClose: () => void }> = ({ onClose }) => {
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
        top: 0,
        transform: "top 1s",
        width: "100dvw",
        zIndex: 1000,
      }}
    >
      <p>店のQRコードをスキャンしてください</p>
      <div
        style={{
          maxHeight: "36rem",
          maxWidth: "36rem",
        }}
      >
        <Scanner
          onScan={(result) => {
            console.log("Decoded QR code:", result)
            onClose()
          }}
          onError={(error) => {
            console.error("QR code scanning error:", error)
            alert("エラーが発生しました。もう一度お試しください。")
          }}
          constraints={{
            facingMode: "environment",
          }}
        />
      </div>
      <Button onClick={() => onClose()}>キャンセル</Button>
    </section>
  )
}
