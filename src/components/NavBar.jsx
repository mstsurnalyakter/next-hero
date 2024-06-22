"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react'

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session);
    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Service",
            path:"/service"
        },
        {
            title:"Contact Us",
            path:"/contact"
        },
        {
            title:"Blogs",
            path:"/blog"
        },
        {
            title:"Categories",
            path:"/categories"
        },
        {
            title:"Dashboard",
            path:"/dashboard"
        },
    ]
    const handleLogin = ()=>{
        router.push("/api/auth/signin")
    }


    // if (pathName.includes("dashboard")) {
    //   return (
    //     <div className='bg-green-400 py-20 text-center'>
    //       Dashboard Navbar
    //     </div>
    //   )
    // }

  return (
    <div>
      <nav className="bg-pink-400 p-10 flex items-center gap-10 justify-center">
        <h3 className="text-3xl text-cyan-600">Next Hero</h3>
        <ul className="flex items-center justify-center gap-10">
          {links.map((link) => (
            <li
              className={`text-lg ${
                pathName === link.path ? "text-yellow-400 underline" : undefined
              }`}
              key={link.path}
            >
              <Link href={link?.path}>{link?.title}</Link>
            </li>
          ))}
        </ul>
        {session.status !== "authenticated" ? (
          <div className='flex gap-2'>
            <Link href={'/api/auth/signup'}>
              <button className="bg-white text-cyan-500 px-3 py-2">
                Sign Up
              </button>
            </Link>
            <button
              onClick={handleLogin}
              className="bg-white text-cyan-500 px-3 py-2"
            >
              Login
            </button>
          </div>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-white text-cyan-500 px-3 py-2"
          >
            Logout
          </button>
        )}
        {session?.data && (
          <div className="flex items-center flex-wrap justify-center gap-2">
            <div className="rounded-full overflow-hidden size-12 mr-3">
              <Image
                alt={session?.data?.user?.name}
                src={session?.data?.user?.image}
                width={200}
                height={200}
              />
            </div>
            <h6>
              {session?.data?.user?.name}
              <br />
              {session?.data?.user?.type}
            </h6>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar