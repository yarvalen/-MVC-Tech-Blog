const router = require('express').Router()
const commentRoutes = require ('./comment_routes')
const postRoutes = require('./post_routes')
const userRoutes = require('./user_routes')


router.use('/user',userRoutes)
router.use('/post',postRoutes)
// router.use('/comment',commentRoutes)

module.exports = router