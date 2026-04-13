"use client"

import { useState } from "react"
import { fetchEventSource } from "@microsoft/fetch-event-source"
import ExperimentForm from "../components/experimentform"
import OutputViewer from "../components/OutputViewer"

export default function Product() {
  const [output, setOutput] = useState("")

  async function handleSubmit(data: any) {
    let buffer = ""
    setOutput("")

    await fetchEventSource("http://localhost:8000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      onmessage(ev) {
        buffer += ev.data
        setOutput(buffer)
      }
    })
  }

  return (
    <div className="min-h-screen p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">GeneInsight Studio</h1>

      <ExperimentForm onSubmit={handleSubmit} />

      <OutputViewer output={output} />
    </div>
  )
}