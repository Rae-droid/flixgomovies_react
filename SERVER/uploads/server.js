
import connectDB from '../config/db.js'; // Database connection
import dotenv from 'dotenv'
dotenv.config(); // Load environment variables






app.get('/', (req, res) => {
  res.send('FlixGo Backend is Running!');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));