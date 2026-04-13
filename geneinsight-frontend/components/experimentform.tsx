import React, { useState } from "react"

export default function ExperimentForm({ onSubmit }: any) {
  const [notes, setNotes] = useState("")
  const [sampleType, setSampleType] = useState("RNA")

  function handleSubmit(e: any) {
    e.preventDefault()
    onSubmit({
      experiment_type: "Genomics",
      sample_type: sampleType,
      notes
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <select
        value={sampleType}
        onChange={(e) => setSampleType(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option>RNA</option>
        <option>DNA</option>
        <option>Blood</option>
        <option>Tissue</option>
      </select>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Paste genomic findings..."
        className="w-full h-40 border p-4 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>
    </form>
  )
}