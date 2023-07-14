import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class User {
  public get id(): number {
    return this._id;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3)
      throw new HttpException(
        'Name inferior a 3 caracteres',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    this._name = value;
  }
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private readonly _id: number,
  ) {}
}
