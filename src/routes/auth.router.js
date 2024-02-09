import express from '../apps/express.js'

// controller

// middleware

// validation

const AuthRouter = express.Router()

// router.post('/auth/register')
AuthRouter.get('/auth',(req,res,next)=>{
res.status(200).json({
    message:'OK'
})
})

export default AuthRouter