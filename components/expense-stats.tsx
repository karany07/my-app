export function ExpenseStats({ total, count }: { total: number; count: number }) {
  const statCards = [
    {
      title: "Total Expenses",
      value: `$${total.toFixed(2)}`,
      gradient: "from-purple-500 to-purple-600",
      icon: "💰",
    },
    {
      title: "Total Entries",
      value: count,
      gradient: "from-cyan-500 to-blue-600",
      icon: "📊",
    },
    {
      title: "Average Expense",
      value: `$${count > 0 ? (total / count).toFixed(2) : "0.00"}`,
      gradient: "from-orange-500 to-pink-600",
      icon: "📈",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statCards.map((stat, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-white/80 font-medium text-sm">{stat.title}</p>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
