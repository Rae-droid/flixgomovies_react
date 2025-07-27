import  express from 'express';
 export{
  register,
  login,
  getMe,
} from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/sign up', );
router.post('/login', );
router.get('/me', protect, );

export default router;