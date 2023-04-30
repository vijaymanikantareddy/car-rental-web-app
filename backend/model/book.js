const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema  = new Schema({
    clg:{
        type: String,
        require: true
    },
    building:{
        type: String,
        require: true
    },
    location:{
        type: String,
        require: true
    },
    dateofcomplaint:{
        type: String,
        require: true
    },
    ctype:{
        type: String,
        require: true
    },
    workpriority:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    remark:{
        type: String,
        require: true
    }
})


module.exports = mongoose.model('books', bookSchema )