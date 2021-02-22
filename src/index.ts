import * as core from "@actions/core";
import * as setup from "@extractions/setup-crate";

async function main() {
  try {
    const versionSpec = core.getInput("mdbook-version");
    const tool = await setup.checkOrInstallTool({
      owner: "rust-lang",
      name: "mdBook",
      versionSpec,
    });
    core.addPath(tool.dir);
    core.info(`Successfully setup ${tool.name} v${tool.version}`);
  } catch (err) {
    core.setFailed(err.message);
  }
}

main();
