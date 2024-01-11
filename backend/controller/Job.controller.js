
const Job = require("../model/Job.model");

exports.create = (req, res) => {
	console.log(req.body);
	const data = req.body;
	new Job({
		company_name: data.company_name,
		Hiring_Manager_Name: data.Hiring_Manager_Name,
		email: data.email,
		address: data.address,
		city: data.city,
		zip: data.zip,
		role_type: data.role_type,
		title: data.title,
		compensation_type: data.compensation_type,
		salary_amount: data.salary_amount,
		ote: data.ote,
		average_order: data.average_order,
		industry: data.industry,
		job_description: data.job_description,
		created_date: data.created_date,
		expiration_date: data.dxpiration_date,
		status: data.status,
		company_description: data.company_description,
		company_url: data.company_url,
		header_image_url: data.header_image_url
	})
		.save()
		.then((result) => {
			res.send("ok");
		})
		.catch((error) => {
			console.log(error);
		});
};
exports.getData = (req, res) => {
	Job.find()
		.then((result) => {
			res.send(result);
		})
		.catch(err => {
			res.send(err);
		})
}
