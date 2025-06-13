import { NextResponse } from "next/server";
import { sanityClient } from "@/libs/sanity";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await sanityClient.fetch(`*[_type == "user" && _id == $id][0]`, {
    id: params.id,
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}
