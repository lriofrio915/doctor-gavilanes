"use server";

import React from 'react'
import { getErrorMessage, validateString } from '~/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '~/email/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const name = formData.get('name');
    const number = formData.get('number');
    const textarea = formData.get('textarea');

    if (!validateString(textarea, 500)) {
        return {
            error: "Error con el mensaje",
        };
    }
    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <no-responder@resend.dev>",
            to: 'medicina.vascular.ec@gmail.com',
            subject: 'Mensaje de su consultorio en linea',
            /* text: textarea as string, */
            react: React.createElement(ContactFormEmail, {
                name: name as string,
                number: number as string,
                textarea: textarea as string,
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage
        };
    }

    return {
        data
    }
};