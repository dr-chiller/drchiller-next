export default function BenefitsSection({ title, benefits }) {
    return (
        <section className="py-14 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-900 shadow-lg dark:shadow-gray-950 rounded-xl">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">{title}</h2>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
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
