import express from 'express'
const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({message: "Rota de POST auth/signup"});
});

router.post('/login', (req, res) => {
    res.json({message: "Rota de POST auth/login"});
});

router.post('/logout', (req, res) => {
    res.json({message: "Rota de POST auth/logout"});
});

export default router