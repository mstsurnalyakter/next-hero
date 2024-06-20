"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavBar = () => {
    const pathName = usePathname();
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
    ]
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
      </nav>
    </div>
  );
}

export default NavBar