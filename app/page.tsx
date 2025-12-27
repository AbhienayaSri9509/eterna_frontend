import Table from '../components/Table'

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Token Discovery — Mock</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <Table />
        </div>
      </div>
    </main>
  )
}
