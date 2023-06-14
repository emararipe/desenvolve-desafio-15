import Header from './components/header/header'
import Footer from './components/footer/footer'

type LayoutProps = {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='layout'>
        <Header />
          <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout