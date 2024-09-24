// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

// eslint-disable-next-line no-unused-vars
const transporter = nodemailer.createTransport({
    service: 'Gmail',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'programmer3@muneshwers.store',
		pass: 'vgobabvqrkdjlqlf'
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

