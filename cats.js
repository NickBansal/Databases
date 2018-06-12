var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app")

var catSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    color: String, 
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat ({
//     name: "Timmy",
//     age: 4,
//     color: "Yellow",
// })

// george.save(function(err, cat){
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("Cat Saved");
//         console.log(cat);
//     }
// })

Cat.create({
    name: "SnowWhite", 
    age: 17,
    color: "Teal",
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log("HELLO")
        console.log(cat);
    }
})

Cat.find({}, function(err, cat){
    if(err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log("Successful Find");
        console.log(cat);
    }
});