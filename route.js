import { NextResponse } from "next/server";
import prisma from "./utils/prismadb";



// Get All Data
export async function GET() {
  try {
    const techSkills = await prisma.techSkills.findMany();
    return NextResponse.json(
      {
        message: "Data fetched",
        data: techSkills,
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
    const techSkill = await prisma.techSkills.create({
      data: {
        Description,
        Name,
        Icon,
      },
    });
    return NextResponse.json({ data: techSkill }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// EDIT SINGLE DATA
export async function PUT(Request) {
  try {
    const { id, Description, Name, Icon } = await Request.json();
    const techSkill = await prisma.techSkills.update({
      where: { id: id },
      data: {
        Description,
        Name,
        Icon,
      },
    });
    return NextResponse.json({ data: techSkill }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// DELETE SINGLE DATA
export async function PATCH(Request) {
  try {
    const { id } = await Request.json();
    console.log("gotcha");
    await prisma.techSkills.delete({
      where: { id: id },
    });
    return NextResponse.json(
      { message: "techSkill deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
