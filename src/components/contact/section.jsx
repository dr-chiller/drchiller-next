"use client";

import ContactForm from "./contact-form";

const ContactUsSection = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">

                {/* Left - Info */}
                <div className="space-y-6 bg-white dark:bg-gray-950 rounded-lg p-6 shadow border border-gray-100 dark:border-gray-900">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                        Contact Information
                    </h2>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6 9.5 7.12 9.5 8.5 10.62 11 12 11z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.33 7-12.5A7 7 0 005 8.5C5 15.67 12 21 12 21z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Location</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                CTS - Chiller Technical Services LLC. <br />
                                Industrial Area # 02. <br />
                                Ajman, UAE.
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l8.89 5.93a2 2 0 002.22 0L23 8" />
                                <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Email</h4>
                            <a
                                href="mailto:info@drchiller.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500"
                            >
                                info@drchiller.com
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-md p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.1l-2.1 2.1a11.042 11.042 0 005.3 5.3l2.1-2.1a1 1 0 011.1-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Numbers</h4>
                            <a href="tel:+97167434537" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-500">
                                +971 67434537
                            </a>
                            <a href="tel:+971556700789" className="block text-gray-600 dark:text-gray-400 hover:text-emerald-500">
                                +971 556700789
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Form */}
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUsSection;
