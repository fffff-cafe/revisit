import { FC } from "react"
import { Section } from "../../components/elements"
import QRCode from "react-qr-code"

const Page: FC = () => {
  const url = `${process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"}/visit?key=xxx`
  return (
    <>
      <Section>
        <a href={url} target="_blank" rel="noreferrer">
          <QRCode bgColor="#222" fgColor="#999" value={url} />
        </a>
      </Section>
    </>
  )
}

export default Page
