const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = "123aB567**";

async function hashPassword() {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(hashedPassword);
}

hashPassword();