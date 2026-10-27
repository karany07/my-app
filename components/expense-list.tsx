"use client"

import type { Expense } from "@/app/page"
import { Button } from "@/components/ui/button"

const CATEGORY_COLORS: Record<string, string> = {
  Food: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Transport: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Entertainment: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Utilities: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Health: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Shopping: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  Other: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
}

export function ExpenseList({
  expenses,
  onDeleteExpense,
}: {
  expenses: Expense[]
  onDeleteExpense: (id: string) => void
}) {
  return (
    <div className="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-5">
        Recent Expenses
      </h2>
      <div className="space-y-3">
        {expenses.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No expenses yet. Add one to get started!</p>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-lg hover:border-purple-300 hover:bg-purple-50/30 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      CATEGORY_COLORS[expense.category] || CATEGORY_COLORS["Other"]
                    }`}
                  >
                    {expense.category}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{expense.description}</p>
                    <p className="text-xs text-gray-500">{expense.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-purple-600">${expense.amount.toFixed(2)}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  ✕
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
