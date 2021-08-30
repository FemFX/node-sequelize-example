module.exports = async () => {
  const Tweet = require("./models/Tweet");
  const User = require("./models/User");
  User.hasMany(Tweet);
  Tweet.belongsTo(User);
  const user = await User.create({ name: "test", password: "test" });
  await Tweet.create({ userId: user.id, content: "asdassa" });
  await User.findAll({
    where: { name: "test" },
    include: [{ model: Tweet, content: "asdassa" }],
  }).then((res) => console.log(res));
};
