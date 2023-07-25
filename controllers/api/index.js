const router = require("express").Router();
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
// router.use('/comment',commentRoutes)

// router.use("/", homeRoutes);
// router.use('/login', loginRoutes);
// router.use('/signup', signupRoutes);
// router.use('/blogposts', blogpostRoutes);

module.exports = router;
