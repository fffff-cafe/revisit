import { ComponentProps, FC } from "react"

export const Section: FC<ComponentProps<"section">> = ({ style, ...props }) => {
  return (
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
        ...style,
      }}
      {...props}
    />
  )
}

export const Button: FC<ComponentProps<"button">> = ({ style, ...props }) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "#161616",
        border: 0,
        borderRadius: ".5rem",
        padding: ".5rem 1.5rem",
        ...style,
      }}
    />
  )
}
