import mongoose from "mongoose"
const projectNoteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    note: {
      type: String,
      require:true
    },
    creationDate: {
      type: String,
      require: true,
    },
    userType:{
      type: String,
      // require: true,
    }
  },
  { timestamps: true }
);

export const ProjectNote = mongoose.model("ProjectNote", projectNoteSchema);