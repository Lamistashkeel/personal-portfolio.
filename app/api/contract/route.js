// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   const { firstName, lastName, email, phone, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,   // no NEXT_PUBLIC_ — server-only secret
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `${firstName} ${lastName}`,
//       to: 'your@gmail.com',
//       subject: 'Contact Form Submission - Portfolio',
//       html: `<p>Name: ${firstName} ${lastName}</p>
//              <p>Email: ${email}</p>
//              <p>Phone: ${phone}</p>
//              <p>Message: ${message}</p>`,
//     });
//     return Response.json({ code: 200, status: 'Message Sent' });
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }