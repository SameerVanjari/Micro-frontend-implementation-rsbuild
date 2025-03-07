import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "layout",
      remotes: {
        chat: "chat@http://localhost:3001/mf-manifest.json",
      },
      shared: ["react", "react-dom", "tailwindcss", "postcss"],
    }),
  ],
  output: {
    injectStyles: false,
  },
});
