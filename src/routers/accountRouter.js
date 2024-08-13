import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
    res.json({message: "Rota de POST account"});
});

router.get('/list', (req, res) => {
    res.json({message: "Rota de GET account list"});
});

router.get('/:id', (req, res) => {
    res.json({message: "Rota de GET account ID"});
});

router.put('/:id', (req, res) => {
    res.json({message: "Rota de PUT account"});
});

router.delete('/:id', (req, res) => {
    res.json({message: "Rota de DELETE account"});
});

export default router