// @ts-nocheck

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const service = await db.service.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json(service);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Service",
        error,
      },
      { status: 500 }
    );
  }
}
