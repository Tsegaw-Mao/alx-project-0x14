import Footer from "./Footer"
import Header from "./Header"

export interface ReactComponentProps {
    children: React.ReactNode
}

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;