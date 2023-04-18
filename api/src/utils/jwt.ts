import jwt from 'jsonwebtoken';

export const generateJWT = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(
      payload,
      process.env.JWT_SECRET!,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(token!);
      },
    );
  });
};
