import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { AppContent } from "../src/App";

export function render() {
  return renderToString(<StaticRouter location="/"><AppContent /></StaticRouter>);
}
