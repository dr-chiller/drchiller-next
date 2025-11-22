import InfoCard from "./card";

export default function InfoList({ data }) {
    return (
        <section className="py-16 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-gray-200 font-bold mb-10 text-center">
                    {data.title}
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {data.items.map((item, index) => (
                        <InfoCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
