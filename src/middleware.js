import { NextResponse } from 'next/server'
import React from 'react'
// const user = false;
const user = true;
const coo = "next-superhero";

export const middleware = (request) => {
//   return NextResponse.next();
//   return NextResponse.redirect(new URL("/about",request.url));
const cookies = request.cookies.get("token")
if (!cookies || cookies.value !== coo) {
  return NextResponse.rewrite(new URL("/login", request.url));
}
return NextResponse.next();
}

export const config = {
    matcher:'/dashboard'
    // matcher:['/about','/service']

}