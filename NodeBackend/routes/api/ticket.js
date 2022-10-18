const router = express.Router();

router.get('/',(req,res)=>{
    res.send('ticket / called..')
})


module.exports = router; 