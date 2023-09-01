const mogoose = require("mongoose")

const TaskSchema = new mogoose.Schema({
    name:{
       type:String,
       required : [true,"must provied name"],
       trim:true,
       maxlength:[20,"name can be more 20 character"],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mogoose.model('Tasks-modale',TaskSchema)