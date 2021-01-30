import cors from 'cors';
import express from 'express';

const main = async () => {
  // Express app
  const app = express();

  // Cors middleware
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  // Server listening
  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
  });
};

main().catch((error) => {
  console.error(error);
});
