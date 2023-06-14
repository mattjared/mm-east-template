import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = {
  matcher: '/book-my-training',
}

export async function middleware(req) {
  // Check Edge Config to see if the maintenance page should be shown
  const isBookingTrainings = await get('isBookingTrainings')
  console.log("hello");
  if (!isBookingTrainings) {
    console.log("hi");
    req.nextUrl.pathname = `/not-booking`
    return NextResponse.rewrite(req.nextUrl)
  }
}