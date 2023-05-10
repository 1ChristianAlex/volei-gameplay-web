import { IsEmail, IsString, Min } from 'class-validator';

class LoginFormModel {
  @IsEmail()
  public email: string;

  @IsString()
  @Min(8)
  public password: string;
  constructor(data: LoginFormModel) {
    Object.assign(this, data);
  }
}

export default LoginFormModel;
