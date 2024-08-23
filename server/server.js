import connect from './config/db.js';
import app from './app.js';

const port = process.env.PORT || 8000;
const databaseConnectionUri = process.env.MONGODB_URI.replace('<PASSWORD>', process.env.DB_PASSWORD);

const server = async () => {
  try {
    connect(databaseConnectionUri);
    app.listen(port, () => {
      console.log(`Server has started on port: http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
