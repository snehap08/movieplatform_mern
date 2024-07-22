const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');
const verifyToken = require('../middleware/auth'); // Adjust path if needed

// Controller functions (assuming these are defined in your controllers/favorites.js)
const { addFavorite, getFavorites, removeFavorite } = require('../controllers/favorites');

// Add Favorite Route
router.post('/api/favourite', async (req, res) => {
    try {
        // Destructure the necessary fields from req.body
        const { id, poster, title } = req.body;

        // Create a new Favorite document
        const newFavorite = new Favorite({
            movieId: id,
            poster,
            title,
            // Assuming user ID is available in req.user from verifyToken middleware
        });

        // Save the new favorite to the database
        const savedFavorite = await newFavorite.save();

        // Respond with the saved favorite
        res.status(201).json({ message: "saved successfully", favorite: savedFavorite });
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.get('/api/allfavourites', async (req, res) => {
    try {
        // Fetch all favorite movies from the database
        const favorites = await Favorite.find();

        // Respond with the list of favorite movies
        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
router.delete('/api/delfavourite/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the favorite movie with the matching movie ID
        const deletedFavorite = await Favorite.findOneAndDelete({ movieId: id });

        if (!deletedFavorite) {
            return res.status(404).json({ message: 'Favorite movie not found' });
        }

        // Respond with a success message
        res.status(200).json({ message: 'Favorite movie deleted successfully' });
    } catch (error) {
        console.error('Error deleting favorite:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
module.exports = router;
