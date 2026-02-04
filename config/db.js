const {Sequelize} = require('sequelize'); 
const sequelize = new Sequelize('my_learning','root','',{host:'localhost',dialect:'mysql'});

module.exports = sequelize;