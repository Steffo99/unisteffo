import {useEffect, useErrorBoundary} from "preact/hooks";

let Sentry = null;
if(process.env.NODE_ENV === "development") {
    console.debug("Initializing Preact Debugger...")
    require("preact/debug");
}
else if(process.env.NODE_ENV === "production") {
    console.debug("Initializing Sentry...")
    Sentry = require("@sentry/browser");
    Sentry.init({dsn: "https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500"});
}
else {
    console.debug("Not initializing anything, unknown env.");
}

export default function (props) {
    let [error, resetError] = useErrorBoundary();

    let client;
    useEffect(() => {
        const client = new BrowserClient({
            dsn: 'https://9f5089346fd14e04a6f412638474dfec@o40131.ingest.sentry.io/5255500',
        })
        if(error) {
            client.captureException(error)
        }
    }, [])

    return (
        <div>
        </div>
    );
}
