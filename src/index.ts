import app from './app';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
  console.log(`Starting at http://localhost:${port}`);
});

export default app;
