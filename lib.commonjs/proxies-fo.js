"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxiesFoClient = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class ProxiesFoClient {
    static BASE_URL = "https://proxies.fo/api/v1";
    apiKey;
    constructor({ apiKey }) {
        this.apiKey = apiKey || process.env.PROXIES_FO_API_KEY;
    }
    ln(v) {
        console.log(v);
        return v;
    }
    async _call(uri, params) {
        if (!params.headers)
            params.headers = {};
        params.headers["x-api-key"] = this.apiKey;
        return await (await (0, node_fetch_1.default)(this.constructor.BASE_URL + uri, params)).json();
    }
    async reseller() {
        return await this._call("/reseller", {
            method: "GET",
        });
    }
    async createSubUser({ email, username }) {
        return await this._call("/reseller/sub-users", {
            method: "POST",
            body: new URLSearchParams({ email, username }),
        });
    }
    async getAllSubUsers() {
        return await this._call("/reseller/sub-users", {
            method: "GET",
        });
    }
    async getSingleSubUser({ accountId }) {
        return await this._call("/reseller/sub-users/" + accountId, {
            method: "GET",
        });
    }
    async getAllPlans() {
        return await this._call("/reseller/plans", {
            method: "GET",
        });
    }
    async addPlanToSubUser({ accountId, planId }) {
        return await this._call("/reseller/sub-users/" + accountId + "/plans/" + planId, {
            method: "POST",
        });
    }
}
exports.ProxiesFoClient = ProxiesFoClient;
//# sourceMappingURL=proxies-fo.js.map