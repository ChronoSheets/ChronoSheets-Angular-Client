/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * A standard API response
 */
export interface CSApiResponseBoolean { 
    /**
     * The main Data of the response
     */
    data?: boolean;
    /**
     * The API response status. Indicates if the request was successful, failed or was unauthorised.
     */
    status?: CSApiResponseBoolean.CSStatusEnum;
    /**
     * A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do.
     */
    message?: string;
}
export namespace CSApiResponseBoolean {
    export type CSStatusEnum = 'Succeeded' | 'FatalException' | 'GeneralError' | 'ValidationError' | 'UnAuthorized' | 'SessionExpired';
    export const CSStatusEnum = {
        Succeeded: 'Succeeded' as CSStatusEnum,
        FatalException: 'FatalException' as CSStatusEnum,
        GeneralError: 'GeneralError' as CSStatusEnum,
        ValidationError: 'ValidationError' as CSStatusEnum,
        UnAuthorized: 'UnAuthorized' as CSStatusEnum,
        SessionExpired: 'SessionExpired' as CSStatusEnum
    };
}
