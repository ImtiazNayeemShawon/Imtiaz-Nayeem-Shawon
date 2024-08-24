// /pages/api/test.js

import { NextResponse } from "next/server";

// Test API
export async function GET() {
  return NextResponse.json(
    {
      message: "API is working correctly!",
    },
    { status: 200 }
  );
}
