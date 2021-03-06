/**
 * ChronoSheets API
 * <div style=\'font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;\'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target=\'_BLANK\' href=\'http://tsheets.xyz/signup\'>http://tsheets.xyz/signup</a>.  </p></div><div id=\'cs-extra-info\'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CreateAutomationStepRequest { 
    GeofencingId?: number;
    NfcId?: number;
    AutomationActionType?: CreateAutomationStepRequest.AutomationActionTypeEnum;
    Latitude?: number;
    Longitude?: number;
    ClientTime?: string;
}
export namespace CreateAutomationStepRequest {
    export type AutomationActionTypeEnum = 'EnterGeofence' | 'ExitGeofence' | 'TapOnNfc';
    export const AutomationActionTypeEnum = {
        EnterGeofence: 'EnterGeofence' as AutomationActionTypeEnum,
        ExitGeofence: 'ExitGeofence' as AutomationActionTypeEnum,
        TapOnNfc: 'TapOnNfc' as AutomationActionTypeEnum
    };
}


