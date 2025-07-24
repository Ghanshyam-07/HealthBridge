import mongoose from "mongoose";

export const dbConnection = () => {
 // console.log("db",process.env.MONGO_URI)
  mongoose
    .connect(process.env.MONGO_URI, {
      
      dbName: "HOSPITAL_MANAGEMENT",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.error("❌ Error connecting to database:", err);
    });
};
