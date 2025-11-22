export default function AreasWeServe({ title, areas, description }) {
    return (
        <section className="py-14 bg-white dark:bg-black shadow-lg dark:shadow-md dark:shadow-emerald-950">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 md:mb-20 text-center">{title}</h2>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {areas.map((a, i) => (
                        <span key={i} className="px-5 py-2 bg-emerald-50 dark:bg-gray-950 border border-emerald-200 dark:border-gray-700 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                            {a}
                        </span>
                    ))}
                </div>

                <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </section>
    );
}
