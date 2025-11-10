
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'get all MeeTion API' 
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'get one MeeTion API',  
        id
    })
});

router.put('/:id', (req, res) => {
    const body = req.body;
    res.json({
        msg: 'put MeeTion API',  
        body
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'delete MeeTion API'  
    })
});

// Exportamos 'router'
export default router;