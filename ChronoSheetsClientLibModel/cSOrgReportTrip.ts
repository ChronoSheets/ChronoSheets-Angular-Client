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
import { CSTripCoordinate } from './cSCSTripCoordinate';


export interface CSOrgReportTrip { 
    username?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    tripId?: number;
    timesheetId?: number;
    vehicleId?: number;
    userId?: number;
    orgId?: number;
    mobilePlatform?: CSOrgReportTrip.CSMobilePlatformEnum;
    startDate?: Date;
    endDate?: Date;
    vehicleName?: string;
    vehicleMake?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    costPerKilometer?: number;
    tripTotalCost?: number;
    totalTripDistanceMeters?: number;
    startAddress?: string;
    endAddress?: string;
    pathCoordinates?: Array<CSTripCoordinate>;
    cacheExpiryDate?: Date;
}
export namespace CSOrgReportTrip {
    export type CSMobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const CSMobilePlatformEnum = {
        Unknown: 'Unknown' as CSMobilePlatformEnum,
        IOS: 'iOS' as CSMobilePlatformEnum,
        Android: 'Android' as CSMobilePlatformEnum
    };
}
