import { limiter } from "../config/limiter"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string
export async function GET() {
  // const remaining = await limiter.removeTokens(1)
  // console.log("remaining tokens: ", remaining)
  const res = await fetch(DATA_SOURCE_URL)
  const todos: Todo[] = await res.json()
  return Response.json({
    status: "success",
    todos: {
      total: todos.length,
      todos
    }
  })
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json()
  if (!id) return Response.json({ message: "Todo id is required" })
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY }
  })
  return Response.json({ message: `Todo ${id} is successfully deleted` })
}

export async function POST(request: Request) {
  const { id, title }: Partial<Todo> = await request.json()
  if (!id || !title) return Response.json({ message: "Missing required data" })

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY },
    body: JSON.stringify({ userId: id, title, completed: false })
  })
  const newTodo: Todo = await res.json()
  return Response.json({
    todo: newTodo
  })
}
export async function PUT(request: Request) {
  const { userId, id, title }: Partial<Todo> = await request.json()
  if (!id || !title) return Response.json({ message: "Missing required data" })

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY },
    body: JSON.stringify({ userId: id, title, completed: false })
  })
  const newTodo: Todo = await res.json()
  return Response.json({
    todo: newTodo
  })
}
