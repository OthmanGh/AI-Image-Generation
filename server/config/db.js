import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connect = async (url) => {
  mongoose.connect(url);

  mongoose.connection.once('connected', () => {
    console.log('MONGODB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.log('MONGODB ERROR:', error);
  });
};

export default connect;
