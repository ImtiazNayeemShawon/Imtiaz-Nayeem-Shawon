import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Utility function to read the JSON file
const getData = () => {
  const filePath = path.join(process.cwd(), "utils", "techSkills.json");
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
};

// Utility function to write to the JSON file
const saveData = (data) => {
  const filePath = path.join(process.cwd(), "utils", "techSkills.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get All Data
export async function GET() {
  try {
    const techSkills = getData();
    return NextResponse.json(
      {
        message: "Data fetched",
        data: techSkills,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Post Single Data
export async function POST(Request) {
  try {
    const { Description, Name, Icon, Category } = await Request.json();
    const techSkills = getData();

    const newId = techSkills.length
      ? techSkills[techSkills.length - 1].id + 1
      : 1;
    const newSkill = { id: newId, Description, Name, Icon, Category };

    techSkills.push(newSkill);
    saveData(techSkills);

    return NextResponse.json({ data: newSkill }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Edit Single Data
export async function PUT(Request) {
  try {
    const { id, Description, Name, Icon, Category } = await Request.json();
    let techSkills = getData();

    techSkills = techSkills.map((skill) =>
      skill.id === id ? { ...skill, Description, Name, Icon, Category } : skill
    );
    saveData(techSkills);

    return NextResponse.json(
      { message: "Data updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Delete Single Data
export async function PATCH(Request) {
  try {
    const { id } = await Request.json();
    let techSkills = getData();

    techSkills = techSkills.filter((skill) => skill.id !== id);
    saveData(techSkills);

    return NextResponse.json(
      { message: "techSkill deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
