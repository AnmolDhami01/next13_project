import StatusDescription from "@/ResponseWrapper/StatusDescription";
import { NextResponse } from "next/server";
export async function GET(request: Request, response: Response) {
  const statusDescription = new StatusDescription();
  try {
    statusDescription.setStatusCode(200);
    statusDescription.setStatusMessage("Success");
  } catch (error) {
    statusDescription.setStatusCode(500);
    statusDescription.setStatusMessage("Internal Server Error");
  }
  return NextResponse.json({ statusDescription }, { status: 200 });
}
