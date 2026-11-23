const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ status: "Muvin Backend is running successfully!" });
});

// Stream resolver endpoint
app.get('/api/stream', (req, res) => {
    const tmdbId = req.query.tmdbId;
    
    // Returns a clean working stream URL for testing
    res.json({
        tmdbId: tmdbId,
        title: "Sample Movie Stream",
        streamUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        source: "Muvin Backend"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Muvin Backend server is running on port ${PORT}`);
});