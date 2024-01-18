const express = require('express');
const router = express.Router();
const Postings = require('../models/messageModel');

// @route POST 
// @Message Posting
router.put('/add-comment/:id', (req, res) => {
    Postings.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((posts) => {
            if (!posts) {
                return res.status(404).json({ error: 'NoPostings found' });
            }
            res.status(201).send(posts);
        })
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

// @route GET api/
// @description Get allPostings
// @access Public
router.get('/', (req, res) => {
    Postings.find()
        .then((posts) => res.json(posts))
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

// @route GET api/:id
// @description Get singlePostings by id
// @access Public
router.get('/:id', (req, res) => {
    Postings.findById(req.params.id)
        .then((posts) => {
            if (!posts) {
                return res.status(404).json({ error: 'NoPostings found' });
            }
            res.json(posts);
        })
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

// @route POST api/
// @description add/save 
// @access Public
router.post('/new-post', (req, res) => {
    Postings.create(req.body)
        .then((posts) => res.status(201).send(posts))
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

// @route PUT api/:id
// @description Update 
// @access Public
router.put('/:id', (req, res) => {
    Postings.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((posts) => {
            if (!posts) {
                return res.status(404).json({ error: 'NoPostings found' });
            }
            res.json({ msg: 'Updated successfully', posts });
        })
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

// @route DELETE api/:id
// @description Delete id
// @access Public
router.delete('/delete-message/:id', (req, res) => {
    Postings.findByIdAndRemove(req.params.id)
        .then((posts) => {
            if (!posts) {
                return res.status(404).json({ error: 'No such Postings' });
            }
            res.json({ msg: 'Post entry deleted successfully' });
        })
        .catch((err) => res.status(500).json({ error: 'Internal Server Error' }));
});

module.exports = router;
