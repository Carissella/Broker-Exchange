const User = require("./user");
const Post = require("./post");
const Categories = require("./categories");
const Thread = require("./thread");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Thread, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasOne(Categories, {
  foreignKey: "category_id",
});


Categories.hasMany(Post, {
  foreignKey: "category_id",
});

Thread.belongsTo(User, {
  foreignKey: "user_id",
});




module.exports = { User, Post, Categories, Thread };
