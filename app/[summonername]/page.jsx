"use client";

import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const SummonerStats = ({params}) => {
  const fullname = params.summonername

  let parts = fullname.split('_');
 

  let tagid = parts[1];
  let geriKalan = parts[0];

  const [name , setname] = useState(null);
  const [tag, settag] = useState(null);
  const [puuid,setpuuid] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [responseDatalvl, setResponseDatalvl] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const url_api = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=RGAPI-e786f441-6414-460b-a417-aa4534974dfa`
  
  useEffect(() => {
    setLoading(true);
    // fetchdata fonksiyonunu tanımlayın ve sonBesHarf ve geriKalan değerlerini parametre olarak geçirin
    const fetchdata = async (tagid, geriKalan) => {
      try {
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${geriKalan}/${tagid}?api_key=RGAPI-e786f441-6414-460b-a417-aa4534974dfa`);
        
        setResponseData(response.data);

        
        const str_puuid = String(response.data.puuid);
        
        const response_lvl = await axios.get(`https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${str_puuid}?api_key=RGAPI-e786f441-6414-460b-a417-aa4534974dfa`);
        
        setResponseDatalvl(response_lvl.data)
        
        
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    // settag ve setname'i kullanarak state'i güncelleyin
    settag(tagid);
    setname(geriKalan);

    // fetchdata fonksiyonunu çağır, sonBesHarf ve geriKalan değerlerini geçirin
    fetchdata(tagid, geriKalan);

  }, []); // Boş dependency array, sadece bir kez çağırılmasını sağlar

 


//{responseDatalvl.summonerLevel}
  return (
    <div>
      
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-slate-500">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          
        </div>
      </div>
      ) : responseData ? (
        <div className="h-screen">
          <div className=" h-screen bg-slate-500 flex items-center justify-center">
           <p className='mb-48 text-3xl'>Leveliniz: {responseDatalvl.summonerLevel}</p> 
          </div>
          
        </div>
        
      ) : (
        <div className="h-screen">
          <div className=" h-screen bg-slate-500 flex items-center justify-center">
           <p className='mb-48 text-3xl'>Şu Anda Sunucuya erişilemiyor veya böyle bir kullanıcı yok</p> 
          </div>
          
        </div>
      )}
    </div>

  )
}

export default SummonerStats