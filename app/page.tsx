"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ExpenseStats } from "@/components/expense-stats"
import { ExpenseForm } from "@/components/expense-form"
import { ExpenseList } from "@/components/expense-list"
import { CategoryBreakdown } from "@/components/category-breakdown"
import { LoginForm } from "@/components/login-form"

export interface Expense {
  id: string
  amount: number
  category: string
  description: string
  date: string
}

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", amount: 45.99, category: "Food", description: "Grocery shopping", date: "2025-01-10" },
    { id: "2", amount: 120, category: "Transport", description: "Gas", date: "2025-01-09" },
    { id: "3", amount: 29.99, category: "Entertainment", description: "Movie ticket", date: "2025-01-08" },
  ])

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...expense,
      id: Date.now().toString(),
    }
    setExpenses([newExpense, ...expenses])
  }

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <ExpenseStats total={totalExpenses} count={expenses.length} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1">
            <ExpenseForm onAddExpense={addExpense} />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <CategoryBreakdown expenses={expenses} />
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </div>
        </div>
      </div>
    </main>
  )
}
