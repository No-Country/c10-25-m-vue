import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

import app from './server';

const port: number = +process.env.PORT! || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
