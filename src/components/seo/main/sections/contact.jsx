import Link from "next/link";

export default function ContactSection({ data }) {
    return (
        <section className="py-14 bg-emerald-50 dark:bg-emerald-950">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">{data.title}</h2>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-md max-w-xl mx-auto">

                    <p><strong>Location:</strong><br />
                        <a
                            href="https://maps.app.goo.gl/bpqPc2NjBGFzEAqD8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-500 relative group"
                        >{data.location}</a>
                    </p>
                    <p><strong>Email:</strong><br />
                        <a href="mailto:info@drchiller.com" className="hover:text-emerald-500 relative group">
                            info@drchiller.com
                            <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </p>

                    <div>
                        <strong>Phone Numbers:</strong>
                        <div className="mt-1 space-y-1">
                            {data.phones.map((ph, i) => (
                                <a
                                    key={i}
                                    href={`tel:${ph.tel}`}
                                    className="block text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition"
                                >
                                    {ph.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <p className="mt-6 font-medium text-center">{data.footer}</p>
                    <p className="text-center">Submit Your Inquiry <Link className="text-emerald-500 hover:text-emerald-600" href={"/contact-us"}>Here</Link></p>
                </div>
            </div>
        </section>
    );
}
