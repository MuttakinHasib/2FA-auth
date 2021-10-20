import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`.bgGreen.black);
  } catch (err) {
    console.error(`Error ${err}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
