'use client'
import HomePage from "@/components/home/HomePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

let route = useRouter();

useEffect(()=>{
if(window.localStorage !== undefined){
  if(sessionStorage.getItem('auth') == null){
    route.push('/login')
  }
}
},[])

  return (
   <>
   <HomePage />
   </>
  );
}
