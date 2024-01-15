const User = require("../model/User.model");

exports.SignUp = async (req, res) => {
	const data = req.body;
	const result = await User.findOne({ useremail: req.body.email });
	if (result) {
		res.send("exist");
	} else {
		await new User({
			useremail: data.email,
			password: data.password,
			connected: false
		})
			.save(
				function (err) {
					if (err) {
						res.status(500).send("Error registering new user please try again.");
					} else {
						res.status(200).send("Welcome to the club!");
					}
				}
			);
	}
};
exports.SignIn = (req, res) => {
	User.findOne({ useremail: req.body.email })
		.then((result) => {
			if (!result) {
				res.send('error');
			};
			if (result.password == req.body.password) {
				User.findOneAndUpdate(
					{ useremail: result.useremail },
					{ $set: { connected: true } }
				).then((result) => {
					res.send("Login");
				});
			} else {
				res.send('error');
			};
		})
		.catch((error) => {
			console.log(error);
		});
};