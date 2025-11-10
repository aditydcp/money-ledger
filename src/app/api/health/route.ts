import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Server is healthy and running 😄", status: "ok" },
    { status: 200 }
  );
}
