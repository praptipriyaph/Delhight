import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/home.tsx",
  },
  {
    path: "/results",
    file: "routes/results.tsx",
  },
] satisfies RouteConfig;