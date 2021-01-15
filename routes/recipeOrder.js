var express = require('express');
var router = express.Router();
var RecipeOrder = require('../models/recipeOrder')
var ObjectId = require("mongoose").Types.ObjectId;


const deleteMessageProperty = (obj) =>{
    delete obj.message
    return obj
}

//create recipe order
router.post('/add-recipe-order', async function(req, res) {
  let data = req.body
  let recipeOrder = new RecipeOrder(data)

recipeOrder.save()
  .then(result=>res.json(result))
  .catch(err => res.status(400).json('Error: ' + err))
});


//update
router.put('/update-recipe-order', async function(req, res) {
    let data = req.body

    if(data.message){
        await  RecipeOrder.findOneAndUpdate({"_id":  new ObjectId(data.order_id)},
        {$push: {"message": data.message}}, {useFindAndModify: false, new: true})
    }

    RecipeOrder.findOneAndUpdate({"_id":  new ObjectId(data.order_id)},
    {...deleteMessageProperty(data)}, {useFindAndModify: false, new: true})
        .then((result) => {res.json(result)})
        .catch(err => res.status(400).json('Error: ' + err));
  });
  


module.exports = router;