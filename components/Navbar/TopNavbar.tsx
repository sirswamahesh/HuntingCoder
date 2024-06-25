import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function TopNavbar() {
  const {getUser,isAuthenticated} =  getKindeServerSession();
  const user = await getUser();
  return (
    <nav className=" h-[50px] lg:flex lg:items-stretch  bg-blue-400  w-full  flex items-center  justify-center px-5 ">
      <div className="flex  items-stretch h-12  ">
        <a
          href="/"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
        >
          Logo
        </a>
      </div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ">
        <div className="lg:flex  lg:justify-end ml-auto gap-5 justify-center items-center">
          <Link
            href="/dashboard"
            className="flex-no-grow   flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark"
          >
            <h3> Dashboard</h3>
          </Link>
          <Link
            href="/profile"
            className="flex-no-grow   flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark"
          >
            <h3>Profile</h3>
          </Link>
          <Link
            href="/settings"
            className="flex-no-grow   flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark"
          >
            <h3>Settings</h3>
          </Link>

          {await isAuthenticated() ?  <LogoutLink >
            <button className="flex-no-grow rounded-xl  bg-blue-950 text-white  flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark">
              Logout
            </button>
          </LogoutLink>:<> <LoginLink postLoginRedirectURL="/dashboard">
            <button className="flex-no-grow rounded-xl   bg-blue-950 text-white  flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark">
              Sign In
            </button>
          </LoginLink>
          <RegisterLink  postLoginRedirectURL="/dashboard">
            <button className="flex-no-grow rounded-xl  bg-blue-950 text-white flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark">
              Sign Up
            </button>
          </RegisterLink></> }
         
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
