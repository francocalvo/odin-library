/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    "flex",
    "flex-col",
    "items-center",
    "bg-white",
    "border",
    "rounded-lg",
    "shadow-me",
    "h-fit",
    "md:h-80",
    "p-2",
    "md:flex-row",
    "md:items-center",
    "md:w-168",
    "hover:bg-gray-100",
    "dark:border-gray-700",
    "dark:bg-gray-800",
    "dark:hover:bg-gray-700",
    "object-cover",
    "rounded-b-lg",
    "w-48",
    "h-auto",
    "md:w-48",
    "md:rounded-none",
    "md:rounded-l-lg",
    "items-center",
    "justify-between",
    "p-4",
    "leading-normal",
    "md:items-start",
    "mb-2",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-gray-900",
    "dark:text-white",
    "mb-3",
    "font-normal",
    "max-h-0",
    "max-w-96",
    "md:max-h-28",
    "overflow-hidden",
    "md:overflow-scroll",
    "text-gray-700",
    "dark:text-gray-400",
    "mb-3",
    "font-normal",
    "text-gray-700",
    "dark:text-gray-400",
    "md:self-end",
    "text-white",
    "bg-blue-700",
    "hover:bg-blue-800",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-blue-300",
    "font-medium",
    "rounded-full",
    "text-sm",
    "px-5",
    "py-2.5",
    "text-center",
    "mr-2",
    "mb-2",
    "dark:bg-blue-600",
    "dark:hover:bg-blue-700",
    "dark:focus:ring-blue-800",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        168: "42rem",
      },
    },
  },
  plugins: [require("tailwind-nord"), require("flowbite/plugin")],
};
