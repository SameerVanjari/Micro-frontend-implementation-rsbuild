import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "chat",
      exposes: {
        "./Chat": "./src/App.tsx",
      },
      shared: ["react", "react-dom", "tailwindcss", "lucide-react"],
    }),
  ],
  server: {
    port: 3001,
  },
});
