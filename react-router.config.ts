import type { Config } from "@react-router/dev/config";

export default {
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/home.tsx");
      route("/results", "routes/results.tsx");
    });
  },
} satisfies Config;