const mongoose = require("mongoose");

const verificationResultSchema = new mongoose.Schema(
  {
    submissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TaskSubmission",
      required: true
    },
    aiConfidence: {
      type: Number
    },
    fraudScore: {
      type: Number
    },
    reason: {
      type: String,
      default: "",
      trim: true
    },
    explanation: {
      type: String,
      default: "",
      trim: true
    },
    flags: {
      type: [String],
      default: []
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    finalStatus: {
      type: String,
      enum: ["approved", "rejected", "manual_review"],
      required: true
    }
  },
  { timestamps: { createdAt: "verifiedAt", updatedAt: "updatedAt" } }
);

module.exports = mongoose.model("VerificationResult", verificationResultSchema);
