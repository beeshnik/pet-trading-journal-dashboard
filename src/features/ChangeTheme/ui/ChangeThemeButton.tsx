import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type theme = "light" | "dark";

export function ChangeThemeButton() {
    const htmlElement = document.getElementsByTagName("html")[0];
    const [currentTheme, setCurrentTheme] = useState<theme>("dark");

    useEffect(() => {
        htmlElement.dataset.theme = currentTheme;
    }, [currentTheme]);

    const changeTheme = () => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setCurrentTheme(newTheme);
    };

    return (
        <>
            {currentTheme === "dark" ? (
                <Moon onClick={changeTheme} />
            ) : (
                <Sun onClick={changeTheme} />
            )}
        </>
    );
}
