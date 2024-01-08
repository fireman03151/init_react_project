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
exports.SignIn = async (req, res) => {
	await User.findOne({ useremail: req.body.email })
		.then(async (result) => {
			console.log(result);
			if (result.password == req.body.password) {
				await User.findOneAndUpdate(
					{ useremail: result.useremail },
					{ connected: true }
				).then((result) => {
					res.send("Login");
				});
			}
		})
		.catch((error) => {
			console.log(error);
		});
};