import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="App-main">
        <Header />
            <section>
                { children }
            </section>
        <Footer />
    </div>
  )
}

export default Layout