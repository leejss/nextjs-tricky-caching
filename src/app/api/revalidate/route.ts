import { revalidatePath } from "next/cache";

export const GET = () => {
  revalidatePath("/", "layout");

  return Response.json({
    code: "success",
    path: "/revalidation",
  });
};
