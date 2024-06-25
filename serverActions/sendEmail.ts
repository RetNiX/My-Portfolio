"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utilities";
import { getErrorMessage } from "@/lib/utilities";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('msg');
    const senderEmail = formData.get('senderEmail');

    // server side validation
    if (!validateString(message, 500)) {
        return {
            error: "Invalid message"
        }
    }
    if (!validateString(senderEmail, 5000)) {
        return {
            error: "Invalid email"
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "kochick16@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string }) // Did this because we want to keep sendEmail as ts file and not tsx
        })
    } catch (error: any) {
        return {
            error: getErrorMessage(error)
        }
    }
    // We gonna get or the error that occured or the data it self.
    return {
        data
    };
}
