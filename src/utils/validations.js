import { checkCpf } from "../utils/checkCpf";
import moment from "moment";

const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

export const validate = (fields, name, value) => {
  let fieldValidation = fields[name](value);
  if (fieldValidation) {
    return { [name]: fieldValidation };
  }

  return { [name]: null };
};

export const cpfValidation = (value) => {
  if (!value) {
    return "O campo CPF é obrigatório";
  }
  if (!checkCpf(value)) {
    return "CPF inválido";
  }
  return false;
};

export const emailValidation = (value) => {
  if (!value) {
    return "O campo e-mail é obrigatório";
  }
  if (!emailRegex.test(value)) {
    return "E-mail inválido";
  }
  return false;
};

export const passwordValidation = (value) => {
  if (!value) {
    return "O campo senha é obrigatório";
  }
  if (value.length < 6) {
    return "Senha deve conter 6 ou mais dígitos";
  }
  return false;
};

export const birthValidation = (value) => {
  if (!value) {
    return "O campo de nascimento é obrigatório";
  }
  if (!moment(value, "DD/MM/YYYY", true).isValid()) {
    return "Data inválida";
  }
  return false;
};
