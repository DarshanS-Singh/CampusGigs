const express = require('express');
const Gig = require('../models/Gig');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a gig (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, price, university } = req.body;
    if (!title || !description || !price || !university)
      return res.status(400).json({ message: 'All fields are required' });

    const newGig = new Gig({
      title,
      description,
      price,
      university,
      postedBy: req.user.id
    });

    await newGig.save();
    res.status(201).json(newGig);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all gigs (filter by university if query)
router.get('/', async (req, res) => {
  try {
    const { university } = req.query;
    const filter = university ? { university } : {};
    const gigs = await Gig.find(filter).populate('postedBy', 'name email');
    res.json(gigs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
