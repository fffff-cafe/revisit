import { ComponentProps, FC } from "react"

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
