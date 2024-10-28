/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                sidewaysLoader: {
                    "0%": {
                        "justify-content": "flex-start",
                        "padding-right": "60%",
                    },
                    "50%": {
                        "justify-content": "center",
                        padding: "0",
                    },
                    "100%": {
                        "justify-content": "flex-end",
                        "padding-left": "60%",
                    },
                },
                moveIntoViewTopToBottom: {
                    "0%": {
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        height: "0px",
                    },
                    "100%": {
                        height: "100vh",
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
                sidewaysLoader:
                    "sidewaysLoader 1s ease-in-out infinite alternate",
                moveIntoViewTopToBottom: "moveIntoViewTopToBottom 0.1s ease-in",
                FadeInToView: "FadeIn 0.4s ease-in-out",
            },
        },
    },
    plugins: [],
};
