import Link from "next/link";

export default function BookTraining() {
  return (
    <section className="py-10 md:py-16 container max-w-screen-xl mx-auto px-4">
      <div className="bg-gray-50 px-8 py-10 max-w-[50%] mx-auto rounded-md">
        <h4 className="font-semibold text-gray-700 mb-4 text-lg">Book a training</h4>
        <p className="font-normal text-gray-500 text-md mb-6">I am a worldclass trainer of things. Check my availability and book a trianing...</p>
        <Link href="/book-my-training" className="bg-slate-950 text-white rounded-md mt-2 p-3 text-center block">Check availability</Link>
      </div>
    </section>
  )
}
