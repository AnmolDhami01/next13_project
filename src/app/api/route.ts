import StatusDescription from "@/ResponseWrapper/StatusDescription";
import { NextResponse, NextRequest } from "next/server";
import prismadb from "../../lib/prismadb";
import { userModel } from "@/interface";
import ResponseWrapper from "@/ResponseWrapper/ResponseWrapper";
export async function GET(request: Request, response: Response) {
  const statusDescription = new StatusDescription();
  const responseWrapper = new ResponseWrapper();
  try {
    responseWrapper.setStatusDescription(statusDescription);
    const users: userModel[] = await prismadb.Movie.findMany();
    if (users?.length == 0) {
      statusDescription.setStatusCode(220);
      statusDescription.setStatusMessage("No users found");
      return NextResponse.json(responseWrapper, { status: 200 });
    }
    responseWrapper.setUsers(users);
    statusDescription.setStatusCode(200);
    statusDescription.setStatusMessage("Success");
  } catch (error) {
    console.log({ Error });
    statusDescription.setStatusCode(500);
    statusDescription.setStatusMessage("Internal Server Error");
  }
  return NextResponse.json(responseWrapper, { status: 200 });
}
export async function POST(request: NextRequest, response: Response) {
  const statusDescription = new StatusDescription();
  const res = await request.json();
  const responseWrapper = new ResponseWrapper();
  try {
    responseWrapper.setStatusDescription(statusDescription);
    const user: userModel = await prismadb.Movie.create({
      data: {
        title: "String",
        description: "String",
        thumbnailUrl: "String",
        genre: "String",
        duration: "String",
      },
    });
    responseWrapper.setUser(user);
    statusDescription.setStatusCode(200);
    statusDescription.setStatusMessage("Success");
  } catch (error) {
    console.log({ error: error });
    statusDescription.setStatusCode(500);
    statusDescription.setStatusMessage("Internal Server Error");
  }
  return NextResponse.json(responseWrapper, { status: 200 });
}
