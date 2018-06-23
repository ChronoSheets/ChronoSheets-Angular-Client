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
import { CsApiTripCoordinate } from './csApiCsApiTripCoordinate';


export interface CsApiTrip {
    tripId?: number;
    timesheetId?: number;
    vehicleId?: number;
    userId?: number;
    orgId?: number;
    mobilePlatform?: CsApiTrip.CsApiMobilePlatformEnum;
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
    pathCoordinates?: Array<CsApiTripCoordinate>;
    cacheExpiryDate?: Date;
}
export namespace CsApiTrip {
    export type CsApiMobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const CsApiMobilePlatformEnum = {
        Unknown: 'Unknown' as CsApiMobilePlatformEnum,
        IOS: 'iOS' as CsApiMobilePlatformEnum,
        Android: 'Android' as CsApiMobilePlatformEnum
    }
}
