import React from 'react'
import Link from 'next/link'
function SideBar() {
  return (
       
        <aside className="fixed left-0 top-0 w-72 h-full flex flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{height: "100vh"}}
            x-show="asideOpen">
            <Link href="/admin/dashboard" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-home"></i></span>
                <span>Dashboard</span>
            </Link>

            <Link href="/admin/addBlog" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-cart"></i></span>
                <span>Add blog</span>
            </Link>

            <Link href="/admin/profile" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-user"></i></span>
                <span>Profile</span>
            </Link>
            <Link href="/admin/settings" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span className="text-2xl"><i className="bx bx-heart"></i></span>
                <span>Settings</span>
            </Link>

        </aside>

  )
}

export default SideBar
