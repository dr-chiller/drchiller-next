export default function BenefitsSection({ title, benefits }) {
    return (
        <section className="py-14 bg-white dark:bg-black shadow-lg dark:shadow-md dark:shadow-emerald-950">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">{title}</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white dark:bg-gray-950 hover:border-emerald-500 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                            <p className="font-medium text-gray-700 dark:text-gray-300">{b}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
