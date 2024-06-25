"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";

function Profile() {

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
      <h1 className="text-4xl">This is protected profile route.</h1>
    </div>
  )
}

export default Profile
