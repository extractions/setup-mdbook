import * as core from "@actions/core";
import * as setup from "@extractions/setup-crate";

async function install(spec: setup.Tool) {
  const tool = await setup.checkOrInstallTool(spec);
  core.addPath(tool.dir);
  core.info(`Successfully setup ${tool.name} v${tool.version}`);
}

async function main() {
  try {
    const versionSpec = core.getInput("mdbook-version");
    await install({ owner: "rust-lang", name: "mdBook", versionSpec });
    await install({
      owner: "Michael-F-Bryan",
      name: "mdbook-linkcheck",
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}

main();
