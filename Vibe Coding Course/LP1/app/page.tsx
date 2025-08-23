import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#04070d]">
        <div className="pt-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-center text-white">
              Welcome to Landio
            </h1>
            <p className="mt-6 text-center text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto">
              Your Next.js + Tailwind CSS starter is ready! The header navigation is now implemented with glassmorphism effects.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}