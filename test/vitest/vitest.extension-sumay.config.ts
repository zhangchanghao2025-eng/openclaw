// Vitest extension sumay config wires the extension sumay test shard.
import { createScopedVitestConfig } from "./vitest.scoped-config.ts";

export function createExtensionSumayVitestConfig(
  env: Record<string, string | undefined> = process.env,
) {
  return createScopedVitestConfig(["extensions/sumay-openclaw-plugin/**/*.test.ts"], {
    dir: "extensions",
    env,
    name: "extension-sumay",
    passWithNoTests: true,
    setupFiles: ["test/setup.extensions.ts"],
    fileParallelism: false,
  });
}

export default createExtensionSumayVitestConfig();
