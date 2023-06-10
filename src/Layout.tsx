import Header from './components/header'
import Footer from './components/footer'

type LayoutProps = {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
        <Header />
          <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout