const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      status:{
         type: DataTypes.ENUM ("Alive", "Dead", "unknown"),
         allowNull: false,
         unique: true
      },
      species:{
         type: DataTypes.ENUM ("Female", "Male", "Genderless", "unknown"),
         allowNull: false,
         unique: true
      },
      gender:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      image:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      location:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
   }, { timestamps: false });
};
