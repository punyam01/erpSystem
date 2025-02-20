import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
        trim: true
    },
    clientName:{
        type:String,
        required:true,
        trim: true
    },
    projectDesc:{
        type:String,
        required:true,
        minlength: [30, "Minimum character count should be 30"],
        trim: true,

    },
    projectManager:{
        type:[mongoose.Schema.Types.ObjectId],
        ref : 'User',
        required:false,
        default:[]
    },
    projectLead:{
        type:[mongoose.Schema.Types.ObjectId],
        ref : 'User',
        required:false,
        default:[]
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
        validate: {
            validator: function (value) {
              return this.startDate <= value;
            },
            message: 'End date must be after the start date.',
          },
    },
    teamMember:{
        type:[mongoose.Schema.Types.ObjectId],
        ref : 'User',
        required:false,
        default:[]
    },
    projectStatus:{
        type:String,
        enum: ['Todo', 'In Progress', 'In Review', 'Completed'],
        default: 'Todo',
        index: true,
    },
    projectTasks:{
        type:[mongoose.Schema.Types.ObjectId],
        ref : 'Task',
        required:false,
        default:[]
    }
},{timestamps:true});

 export const Project = mongoose.model("Project", projectSchema)
