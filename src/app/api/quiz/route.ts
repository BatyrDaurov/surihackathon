import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { QuizModules } from "@/lib/types";

export async function GET() {
  const filePath = process.cwd() + "/public/modules_en.json"; // Adjust path as needed
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: QuizModules[] = JSON.parse(fileContents);

  return NextResponse.json(data);
}
