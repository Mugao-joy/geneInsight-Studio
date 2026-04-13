import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 p-10">
      
      <h1 className="text-5xl font-bold mb-6 text-center">
        GeneInsight Studio 🧬
      </h1>

      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        AI-powered genomics assistant that transforms raw experimental notes
        into structured insights, hypotheses, and regulatory-ready summaries.
      </p>

      <Link href="/product">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
          Open App
        </button>
      </Link>

    </main>
  )
}