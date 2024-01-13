const mongoose = require("mongoose");
const { Schema } = mongoose;

const newSchema = new Schema({
	company_name: {
		type: String,
		required: true,
	},
	Hiring_Manager_Name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		default: false,
	},
	address: {
		type: String,
		default: false,
	},
	city: {
		type: String,
		default: false,
	},
	zip: {
		type: String,
		default: false,
	},
	role_type: {
		type: String,
		default: false,
	},
	title: {
		type: String,
		default: false,
	},
	compensation_type: {
		type: String,
		default: false,
	},
	salary_amount: {
		type: String,
		default: false,
	},
	ote: {
		type: String,
		default: false,
	},
	inbound_leads: {
		type: String,
		default: false,
	},
	prospecting_required: {
		type: String,
		default: false,
	},
	average_order: {
		type: String,
		default: false,
	},
	industry: {
		type: String,
		default: false,
	},
	job_description: {
		type: String,
		default: false,
	},
	Customer_Support: {
		type: String,
		default: false,
	},
	created_date: {
		type: String,
		default: false,
	},
	expiration_date: {
		type: String,
		default: false,
	},
	status: {
		type: String,
		default: false,
	},
	company_description: {
		type: String,
		default: false,
	},
	company_url: {
		type: String,
		default: false,
	},
	header_image_url: {
		type: String,
		default: false,
	},
});

const Job = mongoose.model("Job.model", newSchema);
module.exports = Job;