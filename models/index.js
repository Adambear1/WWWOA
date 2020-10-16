const mongoose = require("mongoose");
const MembersSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

const Members = mongoose.model("members", MembersSchema);

module.exports = Members;
