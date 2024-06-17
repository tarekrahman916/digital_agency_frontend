import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const {
      title,
      slug,
      category,
      codeLink,
      liveLink,
      features,
      imageUrl,
      isActive,
    } = await request.json();
    const newProject = {
      title,
      slug,
      category,
      codeLink,
      liveLink,
      features,
      imageUrl,
      isActive,
    };
    console.log(newProject);
    return NextResponse.json(newProject);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Project",
        error,
      },
      { status: 500 }
    );
  }
}
