import { search } from "@/lib/cloudinary";

export default async function handler(request, result) {
  const results = await search();
  res.status(200).json(...results);
}