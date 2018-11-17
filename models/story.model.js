const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StorySchema = new Schema({
    username: {type: String, required: false, max: 100},
    useremail: {type: String, required: false, max: 100},
    articlename: {type: String, required: true, max: 100},
    articlenumber: {type: Number, required: true},
    article: {type: String, required: true},
    like:{type: Boolean, required: true},
    read:{type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Story', StorySchema);