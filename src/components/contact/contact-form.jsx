"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = (data) => {
        if (!data.name.trim() || !data.phone.trim() || !data.email.trim() || !data.message.trim()) {
            return "Please fill in all fields.";
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(data.email)) {
            return "Please enter a valid email address.";
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const validationError = validateForm(formData);
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                userId
            );
            setSuccess("Your inquiry has been submitted successfully!");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setError("Something went wrong, please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses =
        "mt-1 w-full rounded-md px-3 py-2 outline-none bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:ring hover:ring-emerald-300 dark:hover:ring-emerald-800 focus:ring-emerald-400 focus:ring";

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-950 rounded-lg shadow p-6 space-y-4 border border-gray-100 dark:border-gray-900"
        >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Submit your Inquiry
            </h2>

            {error && (
                <div className="rounded-md bg-red-500/10 text-red-600 px-4 py-2">{error}</div>
            )}

            {success && (
                <div className="rounded-md bg-emerald-500/10 text-emerald-600 px-4 py-2">
                    {success}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                </label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Enter your name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                </label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Enter your phone number"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Inquiry
                </label>
                <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Write your message"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 rounded-md bg-emerald-500 py-2 text-white font-medium hover:bg-emerald-600 transition disabled:opacity-50"
            >
                {isSubmitting ? (
                    <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
}
