export declare class ProxiesFoClient {
    static BASE_URL: string;
    apiKey: string;
    constructor({ apiKey }: {
        apiKey: any;
    });
    ln(v: any): any;
    _call(uri: any, params: any): Promise<any>;
    reseller(): Promise<any>;
    createSubUser({ email, username }: {
        email: any;
        username: any;
    }): Promise<any>;
    getAllSubUsers(): Promise<any>;
    getSingleSubUser({ accountId }: {
        accountId: any;
    }): Promise<any>;
    getAllPlans(): Promise<any>;
    addPlanToSubUser({ accountId, planId }: {
        accountId: any;
        planId: any;
    }): Promise<any>;
}
