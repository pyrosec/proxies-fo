"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = void 0;
const proxies_fo_1 = require("./proxies-fo");
const change_case_1 = require("change-case");
const yargs_1 = __importDefault(require("yargs"));
yargs_1.default.version(false);
const util_1 = __importDefault(require("util"));
async function runCLI() {
    const options = Object.assign({}, yargs_1.default.argv);
    if (options.h | options.help) {
        console.log('usage: proxies-fo <command> [options]');
    }
    else {
        const arg = yargs_1.default.argv._[0];
        const client = new proxies_fo_1.ProxiesFoClient({});
        const response = await client[arg](Object.entries(options).reduce((r, [key, value]) => {
            r[(0, change_case_1.snakeCase)(key)] = value;
            return r;
        }, {}));
        console.log(util_1.default.inspect(response, {
            colors: true,
            depth: 5
        }));
    }
}
exports.runCLI = runCLI;
//# sourceMappingURL=cli.js.map