const Story = require('../models/story.model');
//Simple version, without validation or sanitation
exports.write = function (req,res) {
    res.render('pages/write');
}
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// create stories
exports.story_create = function (req, res) {
    console.log(req.body)
    let story = new Story(
        {
            articlename: req.body.articlename,
            articlenumber: req.body.articlenumber,
            article: req.body.article,
            like:req.body.like,
            username:req.body.username ,
            useremail:req.body.useremail ,
            read:req.body.read,
        }
    );

    story.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.send('Story Created successfully');
    })
};

exports.allstories = function(req, res){
    Story.find({}, function(err, stories){
        res.render('pages/stories', { stories: stories });

    });
};
//read
exports.story_details = function (req, res) {
    Story.findById(req.params.id, function (err, story) {
        if (err) { console.log(err); }
        res.render('pages/stories', { story: story });
        //res.send(story);
    })
};
//update
exports.story_update = function (req, res) {
    Story.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, story) {
        if (err) return next(err);
        //res.render('pages/create');
        res.send('Story udpated.');
    });
};
//delete
exports.story_delete = function (req, res) {
    Story.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};