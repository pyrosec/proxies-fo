import fetch from "node-fetch";

export class ProxiesFoClient {
  static BASE_URL = "https://proxies.fo/api/v1";
  public apiKey: string;
  constructor({ apiKey }) {
    this.apiKey = apiKey || process.env.PROXIES_FO_API_KEY;
  }
  ln(v) {
    console.log(v);
    return v;
  }
  async _call(uri, params) {
    if (!params.headers) params.headers = {};
    params.headers["x-api-key"] = this.apiKey;
    return await (
      await fetch((this.constructor as any).BASE_URL + uri, params)
    ).json();
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
    return await this._call(
      "/reseller/sub-users/" + accountId + "/plans/" + planId,
      {
        method: "POST",
      }
    );
  }
}
