"use client"
import useGetSongsById from '@/hooks/useGetSongsById';
import usePlayer from '@/hooks/usePlayer'
import React from 'react'
import PlayerContent from './PlayerContent';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
const Player = () => {
    const player=usePlayer();
    const {song}=useGetSongsById(player.activeId);
    const songUrl=useLoadSongUrl(song!);
    if(!song||!songUrl||!player.activeId){
        return null;
    }
  return (
    <div className='fixed bottom-0 bg-black  w-full py-3 h-[80px] px-4'>
        <PlayerContent key={songUrl} song={song} songUrl={songUrl}/>
    </div>
  )
}

export default Player