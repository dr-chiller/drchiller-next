"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const B_ROUTE = process.env.NEXT_PUBLIC_B_ROUTE;

    const inputClasses =
        "w-full px-4 py-2 mt-1 border rounded-md bg-white dark:bg-black dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 hover:border-emerald-500 focus:ring-emerald-500 focus:outline-none";

    const validateForm = () => {
        if (!formData.email.trim() || !formData.password.trim()) {
            return "Please fill in all fields.";
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(formData.email)) {
            return "Please enter a valid email address.";
        }

        return null;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setError(error.message);
            } else {
                setSuccess("Login successful!");
                setFormData({ email: "", password: "" });
                router.push(`${LOGIN_ROUTE}`)
            }
        } catch (err) {
            setError("Something went wrong, please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-8 my-10 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-900 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-emerald-500 mb-6">
                Login
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Error / Success Messages */}
                {error && (
                    <div className="rounded-md bg-red-500/10 text-red-600 px-4 py-2 text-sm">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="rounded-md bg-emerald-500/10 text-emerald-600 px-4 py-2 text-sm">
                        {success}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center gap-2 rounded-md bg-emerald-500 py-2 text-white font-medium hover:bg-emerald-600 transition disabled:opacity-50"
                >
                    {loading ? (
                        <svg
                            className="h-5 w-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
        </div>
    );
}
