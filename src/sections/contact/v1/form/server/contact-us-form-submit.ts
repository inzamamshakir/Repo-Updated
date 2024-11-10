'use server';

import { ServerActionResponse } from '@/src/common-types';
import nodemailer from 'nodemailer';
import { ContactUsSchemaType } from '..';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function contactUsFormSubmit(
  values: ContactUsSchemaType
): Promise<ServerActionResponse<boolean>> {
  const { name, email, subject, message } = values;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_HOST,
      secure: true, // or 'STARTTLS'
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: process.env.MAIL_PUBLIC,
      to: process.env.MAIL_USER,
      subject: subject,
      html: `
        <h3 style="margin-bottom:8px">Name:</h3>
        <p style="margin:0">${name}</p>
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Email:</h3>
        <p style="margin:0">${email}</p>
        <br/>
        <h3 style="margin:0; margin-bottom:8px">Body:</h3>
        <p style="margin-top:0">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      isSuccess: true,
      data: true,
      message: 'Thanks for getting in touch',
    };
  } catch (error) {
    console.error(error);

    return {
      isSuccess: false,
      data: null,
      message: 'Internal Server Error',
    };
  }
}
