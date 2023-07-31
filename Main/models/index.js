// import models
const User = require("./User");
const Thought = require("./Thought");
const Reaction = require("./Reaction");

// model associations

// User has many thoughts
User.hasMany(Thought, {
  foreignKey: "user_id",
});

// Thought belongs to User
Thought.belongsTo(User, {
  foreignKey: "user_id",
});

// User has many reactions
User.hasMany(Reaction, {
  foreignKey: "user_id",
});

// Reaction belongs to user
Reaction.belongsTo(User, {
  foreignKey: "user_id",
});

// Thought has many rections 
Thought.hasMany(Reaction, {
  foreignKey: "thought_id",
});

// Reaction belongs to thoughts
Reaction.belongsTo(Thought, {
  foreignKey: "thought_id",
});


// export all classes
module.exports = { User, Thought, Reaction };
