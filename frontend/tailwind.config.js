/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {},
        keyframes: {
            sidewaysLoader: {
                "0%": {
                    "justify-content": "flex-start",
                    "padding-right": "60%",
                },
                "50%": {
                    "justify-content": "center",
                    "padding": "0",
                },
                "100%": {
                    "justify-content": "flex-end",
                    "padding-left": "60%",
                },
            },
            FadeIn: {
                "0%": {
                    opacity: "0",
                },
                "100%": {
                    opacity: "",
                },
            },
        },
        animation: {
            sidewaysLoader: "sidewaysLoader 1s ease-in-out infinite alternate",
            FadeInToView: "FadeIn 0.4s ease-in-out",
        }
    },
    plugins: [],
};
