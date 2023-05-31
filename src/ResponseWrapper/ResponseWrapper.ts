import { userModel } from "@/interface";
import StatusDescription from "./StatusDescription";

export default class ResponseWrapper {
  private statusDescription!: StatusDescription;
  private user!: userModel;
  private users!: userModel[];

  getStatusDescription(): StatusDescription {
    return this.statusDescription;
  }

  setStatusDescription(statusDescription: StatusDescription): void {
    this.statusDescription = statusDescription;
  }

  getUser(): userModel {
    return this.user;
  }

  setUser(user: userModel): void {
    this.user = user;
  }
  getUsers(): userModel[] {
    return this.users;
  }

  setUsers(users: userModel[]): void {
    this.users = users;
  }
}
