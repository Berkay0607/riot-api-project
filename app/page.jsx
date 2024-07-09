"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';



const HomePage = () => {
  const [username, setUsername] = useState('');
  const [gametag, setGametag] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Gametag:', gametag);
    let url = username + "_"  + gametag;
    router.push(`/${url}`);
  };
  return (
    
    <div className="h-screen">
      <div className="h-2/6  bg-slate-500 flex items-center justify-center">
        <h1 className='md:text-4xl text-xl mt-28'>Leaguer ile LoL Hesabınızın Levelini Öğrenin</h1>
      </div>
      <div className="h-4/6 bg-slate-500 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Kullanıcı Adı
    </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Kullanıcı Adı"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gametag">
      Gametag
    </label>
    <input
      type="text"
      id="gametag"
      value={gametag}
      onChange={(e) => setGametag(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Gametag"
      required
    />
  </div>
  <div className="flex items-center justify-center">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Gönder
    </button>
  </div>
</form>
      </div>
    </div>
  )
}

export default HomePage