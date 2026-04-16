export class HttpException extends Error {
    public statusCode: number
    public status: string
    public isOperational: boolean
    public data: any
  constructor(statusCode: number, message: string= "Http error!", data?:any) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Useful to distinguish between expected vs. unexpected errors
    this.data ??= data

    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, HttpException.prototype)
  }
}

// Example usage:
// throw new HttpException(404, "Member not found");
