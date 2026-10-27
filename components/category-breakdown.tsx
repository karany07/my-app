"use client"

import type { Expense } from "@/app/page"

const CATEGORY_COLORS: Record<string, { bg: string; bar: string }> = {
  Food: { bg: "from-orange-400 to-red-500", bar: "bg-orange-500" },
  Transport: { bg: "from-blue-400 to-cyan-500", bar: "bg-blue-500" },
  Entertainment: { bg: "from-purple-400 to-pink-500", bar: "bg-purple-500" },
  Utilities: { bg: "from-green-400 to-teal-500", bar: "bg-green-500" },
  Health: { bg: "from-red-400 to-pink-500", bar: "bg-red-500" },
  Shopping: { bg: "from-pink-400 to-rose-500", bar: "bg-pink-500" },
  Other: { bg: "from-gray-400 to-slate-500", bar: "bg-gray-500" },
}

export function CategoryBreakdown({ expenses }: { expenses: Expense[] }) {
  const categoryTotals = expenses.reduce(
    (acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount
      return acc
    },
    {} as Record<string, number>,
  )

  const sortedCategories = Object.entries(categoryTotals).sort(([, a], [, b]) => b - a)
  const total = Object.values(categoryTotals).reduce((sum, val) => sum + val, 0)

  return (
    <div className="bg-white border-2 border-cyan-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-5">
        Spending by Category
      </h2>
      <div className="space-y-5">
        {sortedCategories.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No expenses to analyze yet.</p>
        ) : (
          sortedCategories.map(([category, amount]) => {
            const percentage = ((amount / total) * 100).toFixed(1)
            const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS["Other"]
            return (
              <div key={category}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">{category}</span>
                  <span className="text-sm font-bold text-gray-900">
                    ${amount.toFixed(2)} ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${colors.bar} h-3 rounded-full transition-all duration-300 shadow-md`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
