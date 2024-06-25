"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

function Settings() {
    const {isAuthenticated,isLoading} = useKindeBrowserClient();

    if(isLoading){
       return (
           <div className="flex flex-col justify-center items-center mt-24">
         <h1 className="text-4xl">Loading....</h1>
       </div>
       )
    }
    if(!isAuthenticated){
       redirect('/api/auth/login')
    }
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-4xl">This is protected Settings route.</h1>
    </div>
  )
}

export default Settings
