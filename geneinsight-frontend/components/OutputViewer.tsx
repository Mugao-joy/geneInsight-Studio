export default function OutputViewer({ output }: any) {
    return (
      <div className="mt-6 bg-gray-100 p-6 rounded-lg whitespace-pre-wrap">
        {output || "Results will appear here..."}
      </div>
    )
  }