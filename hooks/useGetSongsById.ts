"use client"
import {useEffect,useState,useMemo} from 'react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { Song } from '@/types'
import {toast} from 'react-hot-toast'
import getSongsByUserId from '@/actions/getSongsById'
const useGetSongsById=(id?:string)=>{
    const [isLoading,setIsLoding]=useState(false);
    const [song,setSong]=useState<Song | undefined>(undefined);
    const {supabaseClient}=useSessionContext();
    useEffect(()=>{
        if(!id){
            return;
        }
        setIsLoding(true);

        const fetchSong=async()=>{
            const {data,error}=await supabaseClient
            .from('songs')
            .select('*')
            .eq('id',id)
            .single()
            if(error){
                toast.error(error.message)
            }
            setSong(data as Song);
            setIsLoding(false);
        }
        fetchSong();
    },[id,supabaseClient])
    return useMemo(()=>({
        isLoading,song
    }),[isLoading,song])
}
export default useGetSongsById
