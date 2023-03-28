import jwt from 'jsonwebtoken';

export const generateJWT = (id: number) => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET!,
      {
        expiresIn: process.env.JWT_EXPIRE_IN,
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(token);
      },
    );
  });
};
