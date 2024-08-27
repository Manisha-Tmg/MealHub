const mongoose = require("mongoose");

const connectionDB = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://manishatamang752:manishatamang752@cluster0.k9vbwdk.mongodb.net/mealHub?retryWrites=true&w=majority&appName=Cluster0"
  );

  if (connection) {
    console.log("Connected to database 🗃️");
  } else {
    console.log("Unable to connect with database");
  }
};

module.exports = connectionDB;
