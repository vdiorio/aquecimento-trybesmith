export default class ApiError extends Error {
  private _status: number;

  constructor(status: number, message: string) {
    super(message)
    this._status = status;
  }

  public get status() {
    return this._status;
  }
}
