const User = require("../model/User.model");

exports.SignUp = async (req, res) => {
	console.log(req.body);
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
			.save()
			.then((result) => {
				console.log("ok");
				res.send("ok");
			})
			.catch((error) => {
				console.log(error);
			});
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