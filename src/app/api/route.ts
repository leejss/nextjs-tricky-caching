import { revalidatePath } from "next/cache";

export async function GET() {
  return Response.json({
    message: "Hello from the API",
    date: Date.now(),
  });
}
