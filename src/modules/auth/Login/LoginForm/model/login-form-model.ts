import { LANG } from '@lang/pt';
import { IsEmail, Min } from 'class-validator';

class LoginFormModel {
  @IsEmail({}, { message: LANG.MUST_BE_EMAIL })
  public email: string;

  @Min(8, {
    message: (validationArguments) =>
      `${LANG.MUST_BE_LESS_THAN} ${validationArguments.constraints.at(0)}`,
  })
  public password: string;
  constructor(data: LoginFormModel) {
    Object.assign(this, data);
  }
}

export default LoginFormModel;
