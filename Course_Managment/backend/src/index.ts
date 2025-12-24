import express from 'express';
import mongoose from 'mongoose';
import courseRoutes from './routes/courseRoutes';
import { connectDB } from './config/database';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

// Middleware
app.use(express.json());
// Mount API routes under /api
app.use('/api', courseRoutes);
connectDB();
// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if(mongoose.connection.readyState === 1){
    console.log("MongoDB is connected");
  } else { 
    console.log("MongoDB is not connected");
  }

  
});
