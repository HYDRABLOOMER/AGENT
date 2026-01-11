const mongoose =require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      default: ""
    },
    role: {
      type: String,
      enum: ["user", "ngo", "admin"],
      default: "user"
    },
    credibility_score: {
      type: Number,
      default: 1,
      min: 0,
      max: 1
    }
  },
  { timestamps: true }
);

module.exports =mongoose.model("User", userSchema);
