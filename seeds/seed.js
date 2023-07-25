const sequelize = require('../config/connection')
const { User, Comment, BlogPost } = require('../models')

const userSeed = require('./userSeed.json')
const blogPostSeed = require('./blogSeed.json')
const commentSeed = require('./commentSeed.json')

const seedDb = async() => {
    await sequelize.sync({ force: true })

    await User.bulkCreate(userSeed, {
        individualHooks: true,
        returning: true
    })

    await Comment.bulkCreate(commentSeed,{
        individualHooks: true,
        returning: true
    });

    await BlogPost.bulkCreate(blogPostSeed,{
        individualHooks: true,
        returning: true
    });

   

    process.exit(0);
};

seedDb();