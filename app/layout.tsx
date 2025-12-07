import "./reset.css"

export const metadata = {
  title: "Revisit",
  description:
    "RevisitはFFFFF Cafeに訪れた人のための、訪問履歴を記録するアプリです。",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            alignItems: "center",
            backgroundColor: "#222",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              margin: 0,
            }}
          >
            Revisit
          </h1>
          <nav>
            <a href="//fffff-cafe.com">FFFFF Cafe</a>
          </nav>
        </header>
        <main
          style={{
            alignItems: "center",
            background: "#292929",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "calc(100dvh - 3rem)",
            padding: "1rem",
          }}
        >
          {children}
        </main>
        <footer
          style={{
            backgroundColor: "#222",
            boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: ".75rem",
            padding: "1rem",
          }}
        >
          <p>FFFFF Cafe &copy; Reload, Inc.</p>
        </footer>
      </body>
    </html>
  )
}
export default RootLayout
