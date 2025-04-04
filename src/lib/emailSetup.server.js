/* eslint-disable no-unused-vars */
// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import dotenv from 'dotenv';
import { 
	EMAIL_USER, 
	EMAIL_PASS
 } from '$env/static/private';
// import { EMAIL_USER } from '$env/static/public';
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

dotenv.config();

// eslint-disable-next-line no-unused-vars
const transporter = nodemailer.createTransport({
    service: 'Gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
});

export default transporter;

// eslint-disable-next-line no-unused-vars
// const emailHtml = render({
// 	component: Hello,
// 	props: {
// 		name: 'Svelte'
// 	}
// });

// const options = {
// 	from: 'you@example.com',
// 	to: 'user@gmail.com',
// 	subject: 'hello world',
// 	html: emailHtml
// };

// transporter.sendMail(options);

