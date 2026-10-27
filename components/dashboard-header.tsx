export function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Expense Tracker</h1>
            <p className="text-purple-100 mt-1">Monitor and manage your spending with style</p>
          </div>
        </div>
      </div>
    </header>
  )
}
