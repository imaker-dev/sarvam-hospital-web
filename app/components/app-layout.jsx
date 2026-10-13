import React from 'react'
import Navbar from '../views/layouts/navbar'
import Footer from '../views/layouts/footer'
import WhatsAppChat from '../views/layouts/whatsapp-chat'

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppChat />
    </>
  )
}

export default AppLayout
