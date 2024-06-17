import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const {
      title,
      slug,
      shortDescription,
      description,
      features,
      imageUrl,
      isActive,
    } = await request.json();
    const newService = {
      title,
      slug,
      shortDescription,
      description,
      features,
      imageUrl,
      isActive,
    };
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
