
import { Router } from 'express';
import meetionRoutes from './meetion.routes.js'; 

const router = Router();

router.use('/meetion', meetionRoutes); 


export default router;