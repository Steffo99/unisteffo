import { Form } from "@steffo/bluelib-react";
import { createContext, useContext } from "react";

export const Theme: any = createContext(["sophon", () => console.error("Setting theme outside of context")])

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useContext(Theme)

    return (
        <Form>
            <Form.Select label="Tema" value={theme} onSimpleChange={setTheme} options={{
                "Royal Blue": "royalblue",
                "The Sophonity": "sophon",
                "Sheet of Paper": "paper",
                "Hacker Terminal": "hacker",
                "Gestione Amber": "amber",
            }}/>
        </Form>
    )
}