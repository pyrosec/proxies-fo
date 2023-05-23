#!/usr/bin/env node
'use strict';

const cliModule = import("proxies-fo/cli");

let logger = null;

(async () => {
  const { runCLI, getLogger } = await cliModule;
  logger = getLogger();
  await runCLI();
})().catch((err) => console.error(err));
