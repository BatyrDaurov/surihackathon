import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { DebunkFakeType } from "@/lib/types";

export async function GET() {
  const filePath = process.cwd() + "/public/debunks_en.json"; // Adjust path as needed
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: DebunkFakeType[] = JSON.parse(fileContents);

  return NextResponse.json(data[0]);
}
