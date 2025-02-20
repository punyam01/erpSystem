import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
    },
    projectName:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Project',
        required:true,
    },
    taskDescription:{
        type:String,
        required:true,
    },
    StartDate:{
        type:Date,
        required:true,
    },
    EndDate:{
        type:Date,
        required:true,
    },
    priority:{
        type:String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High'
    },
    taskStatus:{
        type:String,
        enum: ['Todo', 'In Progress', 'In Review', 'Completed'],
        default: 'Todo'
    },
    assignedTo:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Team',
        required: true,
    }
},{timestamps:true});

 export const Task = mongoose.model("Task", taskSchema);