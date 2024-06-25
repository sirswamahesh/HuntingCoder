import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
import { Children } from "react";


async function DashboardLayout({children}:Readonly<{children : React.ReactNode}>) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
        return redirect('/')
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardLayout
