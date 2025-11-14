import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delhight - Find Your Perfect Route</title>
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: '#f9f9f9' }}>
        <div className="min-h-screen flex flex-col">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}