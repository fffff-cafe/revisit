"use client"

import { FC } from "react"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"

const Page: FC = () => {
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
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#161616",
              border: 0,
              borderRadius: ".5rem",
              padding: ".5rem 1.5rem",
            }}
          >
            訪問記録をする
          </button>
        </form>
      </section>
    </>
  )
}

export default Page
