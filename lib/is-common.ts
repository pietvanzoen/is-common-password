import { readFileSync } from 'fs';

const defaultList = readFileSync(`${__dirname}/common-passwords.txt`);

function isCommonPassword(password: string, list: Buffer = defaultList): boolean {
  return list.indexOf(password) > -1;
}

export default isCommonPassword;
