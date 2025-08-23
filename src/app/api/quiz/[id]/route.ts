import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { QuizType } from "@/lib/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const param = await params; // {locale: "id"}
  const id = await parseInt(param.id); // id

  const filePath = process.cwd() + "/public/quizzes_en.json"; // Adjust path as needed
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: QuizType[] = JSON.parse(fileContents);

  if (id < data.length) {
    return NextResponse.json(data[id]);
  } else {
    return NextResponse.error();
  }
}
