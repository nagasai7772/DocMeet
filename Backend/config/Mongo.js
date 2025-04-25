// const mongoose=require('mongoose')
// const connectDB=async()=>
// {
//     mongoose.connection.on('connected',()=>console.log(`Database Connected`))
//     await mongoose.connect(`$process.env.MONGO_DB/${DocMeet}`)
// }
// module.exports = connectDB
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}/DocMeet`, {
      
    });

    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
