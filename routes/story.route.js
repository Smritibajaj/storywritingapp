const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const story_controller = require('../controllers/story.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', function(req, res){
    res.render('pages/index');
});
router.get('/write', function(req, res){
    res.render('pages/create');
});
router.get('/test', story_controller.test);
router.get('/stories', story_controller.allstories);
router.post('/create', story_controller.story_create);
router.get('/:id', story_controller.story_details);
router.put('/:id/update', story_controller.story_update);
router.delete('/:id/delete', story_controller.story_delete);
module.exports = router;