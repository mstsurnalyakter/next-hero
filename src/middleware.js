import React from 'react'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
// const user = false;
// const user = true;
// const coo = "next-superhero";

export const middleware = (request) => {
//   return NextResponse.next();
//   return NextResponse.redirect(new URL("/about",request.url));
// const cookies = request.cookies.get("token")
// if (!cookies || cookies.value !== coo) {
//   return NextResponse.rewrite(new URL("/login", request.url));
// }

const token = cookies(request).get("next-auth.session-token");

console.log(token);

  if (!token) {
  return NextResponse.redirect(new URL('/api/auth/signin',request.url))
  }

  return NextResponse.next();

}

export const config = {
    matcher:['/dashboard','/service']
    // matcher:['/about','/service']

}