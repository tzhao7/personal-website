import { search } from "@/lib/cloudinary";

export async function GET(request) {
  const results = await search();
  return Response.json(results);
}