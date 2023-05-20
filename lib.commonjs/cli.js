"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = void 0;
const proxies_fo_js_1 = require("./proxies-fo.js");
const change_case_1 = require("change-case");
const yargs_1 = __importDefault(require("yargs"));
const util_1 = __importDefault(require("util"));
__exportStar(require("./logger.js"), exports);
const args = (0, yargs_1.default)(process.argv);
async function runCLI() {
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
        const client = new proxies_fo_js_1.ProxiesFoClient({});
        delete options._;
        delete options['$0'];
        const response = await client[(0, change_case_1.camelCase)(arg)](Object.entries(options).reduce((r, [key, value]) => {
            r[(0, change_case_1.camelCase)(key)] = value;
            return r;
        }, {}));
        console.log(json ? JSON.stringify(response, null, 2) : util_1.default.inspect(response, {
            colors: true,
            depth: 5
        }));
    }
}
exports.runCLI = runCLI;
//# sourceMappingURL=cli.js.map