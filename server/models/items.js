const mongoose = require("mongoose");

const items=mongoose.model('items',{
    name:{
        type:String
    }
})

module.exports=items