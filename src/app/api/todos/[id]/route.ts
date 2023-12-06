const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string
type Props = {
  params: {
    id: string
  }
}
export async function GET(request: Request, { params: { id } }: Props) {
  console.log(id)
  return Response.json({
    status: "success"
  })
}
