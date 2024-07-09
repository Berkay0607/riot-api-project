import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-lg font-bold">
      <Link href="/">
        <p className="text-white cursor-pointer">Leaguer</p>
      </Link>
    </div>
    <nav className="flex items-center space-x-4">
      <Link href="/hakkimizda">
        <p className="text-white hover:underline cursor-pointer">Hakkımızda</p>
      </Link>
      <Link href="/iletisim">
        <p className="text-white hover:underline cursor-pointer">İletişim</p>
      </Link>
    </nav>
  </div>
</header>
  )
}

export default Header