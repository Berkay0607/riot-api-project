import Header from './components/header/Header';
import Footer from "./components/footer/Footer"
import "./globals.css"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          
        </head>
      <body>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
      </body>
      
    </html>
  )
}
