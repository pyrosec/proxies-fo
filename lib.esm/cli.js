import { ProxiesFoClient } from "./proxies-fo.js";
import { camelCase } from "change-case";
import yargs from "yargs";
import util from "util";
export * from "./logger.js";
const args = yargs(process.argv);
export async function runCLI() {
    const options = Object.assign({}, args.argv);
    let json;
    if (options.j || options.json) {
        json = true;
        delete options.j;
        delete options.json;
    }
    if (options.h | options.help) {
        console.log('usage: proxies-fo <command> [options]');
    }
    else {
        const arg = args.argv._[2];
        const client = new ProxiesFoClient({});
        delete options._;
        delete options['$0'];
        const response = await client[camelCase(arg)](Object.entries(options).reduce((r, [key, value]) => {
            r[camelCase(key)] = value;
            return r;
        }, {}));
        console.log(json ? JSON.stringify(response, null, 2) : util.inspect(response, {
            colors: true,
            depth: 5
        }));
    }
}
//# sourceMappingURL=cli.js.map