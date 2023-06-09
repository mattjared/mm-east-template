import Image from 'next/image'
import About from "./About"

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <Image src="/headshot.jpeg" alt="" width="250" height="250" className="mx-auto mb-16 rounded-full" />
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{`my name`}</h1>
        <h2 className='text-6xl font-bold'>Account Executive @ Vercel</h2>
        <p className="font-normal text-gray-600 text-md md:text-xl my-16">Selling software and keepign it A1 since Day 1</p>
      </section>
      <section className="py-10 md:py-16 container max-w-screen-xl mx-auto px-4">
          <div className="bg-gray-50 px-8 py-10 max-w-[50%] mx-auto rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">Get in touch</h4>
              <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
      </section>
      <About />
    </main>
  )
}
