export type Expense = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

export type DraftExpense = Omit<Expense, 'id'>

// estos types se toman de la documentación de la dependencia de date-picker que instalamos para usarlos con esta.
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];



export type Category = {
    id: string
    name: string
    icon: string
}