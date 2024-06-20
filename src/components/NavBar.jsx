"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react'

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
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
    ]
    const handleLogin = ()=>{
        router.push("/login")
    }
  return (
    <div>
      <nav className="bg-pink-400 p-10 flex items-center gap-10 justify-center">
        <h3 className="text-3xl text-cyan-600">Next Hero</h3>
        <ul className="flex items-center justify-center gap-10">
          {links.map((link) => (
            <li className={`text-lg ${pathName===link.path ? 'text-yellow-400 underline':undefined}`} key={link.path}>
              <Link href={link?.path}>{link?.title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleLogin} className='bg-white text-cyan-500 px-3 py-2'>Login</button>
      </nav>
    </div>
  );
}

export default NavBar