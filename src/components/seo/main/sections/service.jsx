export default function ServiceProcess(props) {

    console.log(props);

    const { title, steps = [] } = props;

    return (
        <section className="py-14 bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 rounded-xl">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl text-gray-800 dark:text-gray-200 font-bold mb-8 text-center">{title}</h2>

                <div className="space-y-3 sm:space-y-6">
                    {steps.map((s, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                                {i + 1}.
                            </span>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                <span className="font-semibold">{s.title}</span> — {s.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
