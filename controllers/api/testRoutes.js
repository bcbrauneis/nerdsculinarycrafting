const countdown = require('countdown-pkg');
const router = require('express').Router();

router.get('/count', async (req, res) => {
    const countdownCb = () => {
            Recipe.update({ /*set isWinner: false */})
        };
    const future = new Date(Date.now() + 30000);
    const timeNow = Date.now();
    countdown(timeNow, future, countdownCb);
    res.status(200).json({message: "countdown is running on server"});
}); 

module.exports = router;