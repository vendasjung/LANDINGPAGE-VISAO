import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { installContactTracking } from "./lib/contact";
import "./index.css";

const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
installContactTracking();
