import nodemailer from 'nodemailer';

const POST = async (request: Request) => {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jake@westtt.com',
            pass: process.env.MAIL_PASSWORD
        }
    })

    const year = new Date().getFullYear()

    try {
        await transporter.sendMail({
            to: ['jake@westtt.com', email],
            from: 'jake@westt.com',
            replyTo: email,
            subject: 'Westtt.com Form Submission',
            text: `Name: ${name} - Phone: ${phone} - Message: ${message}`,
            html: `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Westtt Email Inquiry</title>
                    </head>
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: transparent;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td style="padding: 20px; background-color: #000000; color: #ffffff; text-align: center; border-radius: 8px;">
                                    <h1 style="color: #ff6f61;">Westtt</h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px;">
                                    <p style="margin: 0; padding-bottom: 20px; font-size: 16px; line-height: 1.5;">Hey ${name}, thanks for your message. I really appreciate you taking the time to reach out. I'll get back to you as soon as I can, but it shouldn't be more than a day or two. Here's the information you sent to me: </p>
                                    <div style="padding-bottom: 20px;">
                                        <p style="margin: 0; font-size: 16px; line-height: 1.5;">Name: ${name}</p>
                                        <p style="margin: 0; font-size: 16px; line-height: 1.5;">Email: ${email}</p>
                                        <p style="margin: 0; font-size: 16px; line-height: 1.5;">Phone: ${phone}</p>
                                        <p style="margin: 0; font-size: 16px; line-height: 1.5;">Message: ${message}</p>
                                    </div>
                                    <p style="margin: 0; padding-bottom: 20px; font-size: 16px; line-height: 1.5;">Talk soon, <br>Jake Grella </p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; text-align: center; background-color: #f4f4f4; color: #666; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 12px;">&copy; ${year} Westtt</p>
                                </td>
                            </tr>
                        </table>
                    </body>
                </html>
            `
        })

        return Response.json({ message: 'email send success' }, { status: 200 })
    } catch (err) {
        return Response.json({ message: 'email send failure' }, { status: 500 })
    }

}

export { POST }
