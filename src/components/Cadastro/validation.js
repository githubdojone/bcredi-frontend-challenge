import {
  emailValidation,
  passwordValidation,
  cpfValidation,
  birthValidation,
} from "../../utils/validations";

export const fields = {
  cpf: cpfValidation,
  birth: birthValidation,
  email: emailValidation,
  password: passwordValidation,
};
