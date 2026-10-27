"use client"

import { type FormEvent, useState } from "react"
import type { Expense } from "@/app/page"
import { Button } from "@/components/ui/button"

const CATEGORIES = ["Food", "Transport", "Entertainment", "Utilities", "Health", "Shopping", "Other"]

export function ExpenseForm({ onAddExpense }: { onAddExpense: (expense: Omit<Expense, "id">) => void }) {
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Food")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!amount || !description) return

    onAddExpense({
      amount: Number.parseFloat(amount),
      category,
      description,
      date: new Date().toISOString().split("T")[0],
    })

    setAmount("")
    setDescription("")
    setCategory("Food")
  }

  return (
    <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
        Add Expense
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-4 py-2 border-2 border-purple-200 bg-purple-50 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border-2 border-purple-200 bg-purple-50 rounded-lg text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What did you spend on?"
            className="w-full px-4 py-2 border-2 border-purple-200 bg-purple-50 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          + Add Expense
        </Button>
      </form>
    </div>
  )
}
