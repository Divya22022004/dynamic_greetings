const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/greetings', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
*/
app.use(cors());
app.use(express.json());

app.get('/greeting', (req, res) => {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    let backgroundImage = 'day.jpg';

    if (hour < 12) {
        greeting = 'Good Morning';
        backgroundImage = 'morning.jpg';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
        backgroundImage = 'afternoon.jpg';
    } else if (hour < 20) {
        greeting = 'Good Evening';
        backgroundImage = 'evening.jpg';
    } else {
        greeting = 'Good Night';
        backgroundImage = 'night.jpg';
    }

    res.json({ greeting, backgroundImage });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
