import Link from "next/link";
import React from "react";

function TopNavbar() {
  return (
    <nav className="fixed top-0 left-[288px] right-0 h-[50px] lg:flex lg:items-stretch  bg-blue-400  ">
      <div className="flex  items-stretch h-12  ">
        <Link
          href="/"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
        >
          Admin
        </Link>
        
      </div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <Link
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark"
          >
            Settings
          </Link>
          <Link
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
