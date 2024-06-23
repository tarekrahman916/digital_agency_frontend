import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const {
      title,
      slug,
      shortDescription,
      description,
      features,
      provideServices,
      categoryId,
      imageUrl,
      isActive,
    } = await request.json();
    const newService = await db.service.create({
      data: {
        title,
        slug,
        shortDescription,
        description,
        features,
        provideServices,
        categoryId,
        imageUrl,
        isActive,
      },
    });
    console.log(newService);
    return NextResponse.json(newService);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Service",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  try {
    const services = await db.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Services",
        error,
      },
      { status: 500 }
    );
  }
}
