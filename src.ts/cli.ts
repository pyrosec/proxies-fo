import { ProxiesFoClient } from "./proxies-fo";

import { snakeCase } from "change-case";
import yargs from "yargs";
yargs.version(false);
import util from "util";

export async function runCLI() {
  const options = Object.assign({}, yargs.argv);
  if (options.h | options.help) {
    console.log('usage: proxies-fo <command> [options]');
  } else {
    const arg = yargs.argv._[0];
    const client = new ProxiesFoClient({} as any);
    const response = await client[arg](Object.entries(options).reduce((r, [key, value]) => {
      r[snakeCase(key)] = value;
      return r;
    }, {}));
    console.log(util.inspect(response, {
      colors: true,
      depth: 5
    }));
  }
}
