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
import { TripCoordinate } from './tripCoordinate';


export interface OrgReportTrip { 
    Username?: string;
    EmailAddress?: string;
    FirstName?: string;
    LastName?: string;
    TripId?: number;
    TimesheetId?: number;
    VehicleId?: number;
    UserId?: number;
    OrgId?: number;
    MobilePlatform?: OrgReportTrip.MobilePlatformEnum;
    StartDate?: string;
    EndDate?: string;
    VehicleName?: string;
    VehicleMake?: string;
    VehicleModel?: string;
    VehicleYear?: string;
    CostPerKilometer?: number;
    TripTotalCost?: number;
    TotalTripDistanceMeters?: number;
    StartAddress?: string;
    EndAddress?: string;
    PathCoordinates?: Array<TripCoordinate>;
    CacheExpiryDate?: string;
}
export namespace OrgReportTrip {
    export type MobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const MobilePlatformEnum = {
        Unknown: 'Unknown' as MobilePlatformEnum,
        IOs: 'iOS' as MobilePlatformEnum,
        Android: 'Android' as MobilePlatformEnum
    };
}


