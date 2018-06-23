/**
 * ChronoSheets API
 * An API for integrating into ChronoSheets timesheets
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CsApiTimesheet } from './csApiCsApiTimesheet';


export interface CsApiApiResponseListTimesheet {
    data?: Array<CsApiTimesheet>;
    status?: CsApiApiResponseListTimesheet.CsApiStatusEnum;
    message?: string;
}
export namespace CsApiApiResponseListTimesheet {
    export type CsApiStatusEnum = 'Succeeded' | 'FatalException' | 'GeneralError' | 'ValidationError' | 'UnAuthorized' | 'SessionExpired';
    export const CsApiStatusEnum = {
        Succeeded: 'Succeeded' as CsApiStatusEnum,
        FatalException: 'FatalException' as CsApiStatusEnum,
        GeneralError: 'GeneralError' as CsApiStatusEnum,
        ValidationError: 'ValidationError' as CsApiStatusEnum,
        UnAuthorized: 'UnAuthorized' as CsApiStatusEnum,
        SessionExpired: 'SessionExpired' as CsApiStatusEnum
    }
}
