/* eslint-disable no-unused-vars */
// @ts-nocheck
import transporter from '$lib/emailSetup.server.js';

export const actions = {
	default: async (event, render) => {
		const formData = await event.request.formData();
		console.log(...formData);

        const contactName = formData.get("contact-name");
        const email = formData.get("contact-email");
        const message = formData.get("contact-message");


        const emailHtml = 
        `
            <div style="font-family:Helvetica,Arial,sans-serif;font-style:normal;font-variant-caps:normal;font-weight:400;">
                <h2>New Mail from ${contactName}, ${email}</h2>
                <p style="font-size: 18px;">${message}</p>
            </div>
        `

        const options = {
            from: 'developers@muneshwers.store',
            to: 'info@muneshwers.org',
            subject: 'New Message from Website Visitor',
            html: emailHtml
        };

        transporter.sendMail(options);

        return {
            success: "Email is sent!",
        }
	}
}