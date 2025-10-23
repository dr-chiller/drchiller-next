"use client";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center mt-10 gap-3">
            {/* Previous Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="cursor-pointer px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-700"
            >
                Previous
            </button>

            {/* Page Info */}
            <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Page <span className="font-semibold">{currentPage}</span> of{" "}
                <span className="font-semibold">{totalPages}</span>
            </span>

            {/* Next Button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="cursor-pointer px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100 disabled:hover:text-gray-700"
            >
                Next
            </button>
        </div>
    );
}
