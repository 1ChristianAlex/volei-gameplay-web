import { LANG } from '@lang/pt';
import { IsEmail, Length } from 'class-validator';

class LoginFormModel {
  @IsEmail({}, { message: LANG.MUST_BE_EMAIL })
  public email: string;

  @Length(8, undefined, {
    message: (validationArguments) =>
      `${LANG.MUST_BE_LESS_THAN} ${validationArguments.constraints.at(0)}`,
  })
  public password: string;
  constructor(data: LoginFormModel) {
    Object.assign(this, data);
  }
}

export default LoginFormModel;
