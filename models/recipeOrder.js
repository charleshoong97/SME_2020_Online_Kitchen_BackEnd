const mongoose = require("mongoose");


const recepiOrderSchema = new mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        title: {
            type: String,
            required:true
        },
        recipe:{
            type: String,
            required:true
        },
        price:{
            type: String,
            required:true
        },
        status: {
            type:String,
            required: true,
            enum: ['1','2','3','4','5','6','7']
        },
        message:{
            type:[[String]] 
        },
        client_update_ddate:{
            type:Date,
        },
        admin_updated_date:{
            type:Date,
        }
    },
    { collection: "recipe_order" }
);


module.exports = mongoose.model("RecipeOrder", recepiOrderSchema)


  