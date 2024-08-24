import { NextResponse } from "next/server";
import prisma from "../../../utils/prismadb";
import ImageUploader from "../../../utils/fileuploader";

// Get All Data
export async function GET() {
  try {
    const Stacks = await prisma.Stacks.findMany();
    return NextResponse.json(
      {
        message: "Data fetched",
        data: Stacks,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// Post single Data
export async function POST(Request) {
  try {
    const { Description, Name, Icon } = await Request.json();
    console.log(Request.body);
    const stack = await prisma.Stacks.create({
      data: {
        Description,
        Name,
        Icon,
      },
    });
    return NextResponse.json({ data: stack }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

//EDIT SINGLE DATA
export async function PUT(Request) {
  try {
    const { id, Description, Name, Icon } = await Request.json();
    const stack = await prisma.Stacks.update({
      where: { id: id },
      data: {
        Description,
        Name,
        Icon,
      },
    });
    return NextResponse.json({ data: stack }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

//DELETE SINGLE DATA
export async function PATCH(Request) {
  try {
    const { id } = await Request.json();
    console.log("gotcha");
    await prisma.Stacks.delete({
      where: { id: id },
    });
    return NextResponse.json(
      { message: "Stack deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
