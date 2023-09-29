#!/usr/bin/env -S deno run -Aq
import * as core from "npm:@actions/core";
import * as tc from "npm:@actions/tool-cache";
import process from "node:process";
import { join } from "node:path";
import { createWriteStream } from "node:fs";
import { chmod } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import semver from "npm:semver";

async function downloadTool(url: string): string {
  const dest = join(
    process.env.RUNNER_TEMP,
    Math.random().toString() + url.match(/\.[^/]+$/)[0]
  );
  core.debug(`Downloading ${url} to ${dest}`);
  const response = await fetch(url);
  await pipeline(response.body, createWriteStream(dest));
  return dest;
}

let version = core.getInput("llvm-version")
if (!/\d+\.\d+\.\d+/.test(version)) {
  const response = await fetch("https://releases.llvm.org")
  const text = await response.text()
  const releases = eval(text.match(/var RELEASES = (.*?);/s)[1])
  const versions = releases.map(x => x[1])
  if (version === "latest") {
    version = "*"
  }
  version = semver.maxSatisfying(versions, version);
}

if (process.platform === "linux" && (process.arch === "x64" || process.arch === "arm64")) {
  let path = await downloadTool("https://apt.llvm.org/llvm.sh")
  await chmod(path, 0o775)
  const $$ = $({ stdio: "inherit" })
  await $$`sudo ${path} ${version}`
} else if (process.platform === "darwin" && process.arch === "x64") {
  throw new DOMException("macOS not implemented yet", "NotSupportedError")
} else if (process.platform === "win32" && process.arch === "x64") {
  throw new DOMException("Windows not implemented yet", "NotSupportedError")
} else {
  throw new DOMException(`${process.platform}/${process.arch} is not supported`, "NotSupportedError")
}

if (core.getBooleanInput("set-env")) {
  core.exportVariable("CC", "clang")
  core.exportVariable("CXX", "clang++")
}
