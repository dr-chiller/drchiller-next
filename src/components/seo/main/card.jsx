"use client";

export default function InfoCard({ title, description, bullets = [], footer }) {
    const hasBullets = bullets && bullets.length > 0;
    const hasFooter = footer && footer.trim().length > 0;

    return (
        <div className="group bg-white dark:bg-gray-900 rounded-xl border border-transparent dark:border-gray-800
            p-6 shadow-lg hover:shadow-xl hover:border-emerald-500/60 dark:hover:border-emerald-500/80
            transition-all">

            {/* Title */}
            <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                {title}
            </h3>

            {/* Description */}
            {description && (
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                    {description}
                </p>
            )}

            {hasBullets && (
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-md mb-4">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2"></span>
                            <span className="leading-relaxed text-base">{b}</span>
                        </li>
                    ))}
                </ul>
            )}

            {hasFooter && (
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-2 font-medium pt-3">
                    {footer}
                </p>
            )}
        </div>
    );
}
