export default function AreasWeServe({ title, areas, description }) {
    return (
        <section className="py-14 bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-900 shadow-lg dark:shadow-gray-950 rounded-xl">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
                    {title}
                </h2>

                <p className="text-center max-w-3xl mx-auto text-gray-600 mb-8 md:mb-12 dark:text-gray-300">
                    {description}
                </p>

                {Array.isArray(areas) && areas.length > 0 && (
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {areas.map((a, i) => (
                            <span
                                key={i}
                                className="px-5 py-2 bg-emerald-50 dark:bg-gray-950 border border-emerald-200 dark:border-gray-700 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium"
                            >
                                {a}
                            </span>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
