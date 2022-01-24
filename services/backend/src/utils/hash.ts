import bcrypt from "bcrypt";

const saltRounds = 10;

export function hash(text: string) {
  return bcrypt.hash(text, saltRounds);
}

export function compareHash(text: string, hash: string) {
  return bcrypt.compare(text, hash);
}
