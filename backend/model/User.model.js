const mongoose = require("mongoose");
const { Schema } = mongoose;

const newSchema = new Schema({
	useremail: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	connected: {
		type: Boolean,
		default: false,
	},
});

const User = mongoose.model("User.model", newSchema);
module.exports = User;