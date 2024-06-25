

import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
async function Dashboard() {
    const {getUser} =  getKindeServerSession();
    const user = await getUser();
  return (
    <div className='flex flex-col justify-center items-center mt-[100px]'>
      <p className='text-4xl  '>Hi {user?.given_name}, this is your dashboard</p>
    </div>
  )
}

export default Dashboard
