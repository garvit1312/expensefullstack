const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-fullstack','root','mod@1999',{
    dialect:'mysql',
    host:'localhost',
    logging:false
});
module.exports=sequelize;