"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("Imie") as string;
    const email = formData.get("Email") as string;
    const message = formData.get("Wiadomosc") as string;

    if (!name || !email || !message) {
        return { error: "Wszystkie pola są wymagane" };
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
        return { error: "Brak konfiguracji EMAIL_USER lub EMAIL_PASS w pliku .env.local" };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: user,
            pass: pass,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${user}>`,
            to: "kolysanki91@gmail.com",
            replyTo: email,
            subject: `Ziewnutki - Nowa wiadomość od: ${name}`,
            text: `Masz nową wiadomość z formularza na stronie Ziewnutki!\n\nOd: ${name} (${email})\n\nTreść:\n${message}`,
        });
        return { success: true };
    } catch (error) {
        console.error("Błąd wysyłania maila: ", error);
        return { error: "Wystąpił błąd podczas autoryzacji u operatora poczty." };
    }
}
