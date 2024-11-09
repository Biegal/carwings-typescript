export interface ICarwingsSession extends Function {
}
export declare class CarwingsAuthenticator {
    username: string;
    password: string;
    regionCode: string;
    constructor(username: any, password: any, regionCode: any);
    login(): Promise<ICarwingsSession>;
    validateSession(session: ICarwingsSession, authenticated?: boolean): Promise<ICarwingsSession>;
}
export interface ICarwingsCheckStatus {
    status: number;
}
/**
 * Makes a request to the API endpoint
 * @param {string} action
 * @param data
 * @returns {Promise<void>}
 */
export declare function api(action: string, data: any): Promise<any>;
/**
 * Logs in and creates a session.
 * @type {Function}
 */
export declare const loginSession: ICarwingsSession;
export declare const batteryRecords: (session: ICarwingsSession) => any;
export declare const batteryStatusCheckRequest: (session: ICarwingsSession) => any;
export declare const batteryStatusCheck: (session: ICarwingsSession) => Promise<any>;
export declare const batteryChargingRequest: (session: ICarwingsSession) => any;
export declare const hvacOn: (session: ICarwingsSession) => any;
export declare const hvacOff: (session: ICarwingsSession) => any;
export declare const hvacStatus: (session: ICarwingsSession) => any;
