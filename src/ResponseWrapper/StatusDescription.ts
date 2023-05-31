export default class StatusDescription {
  private statusCode!: number;
  private statusMessage!: string;

  getStatusCode(): number {
    return this.statusCode;
  }
  getStatusMessage(): string {
    return this.statusMessage;
  }
  setStatusCode(statusCode: number): void {
    this.statusCode = statusCode;
  }
  setStatusMessage(statusMessage: string): void {
    this.statusMessage = statusMessage;
  }
}
