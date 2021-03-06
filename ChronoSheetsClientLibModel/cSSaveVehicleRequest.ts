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
 * Fields for saving an existing Vehicle
 */
export interface CSSaveVehicleRequest { 
    /**
     * The Id of the Vehicle that is being updated
     */
    id?: number;
    /**
     * The Name of the Vehicle
     */
    name?: string;
    /**
     * The fuel cost / running cost of the Vehicle, measured per kilometer
     */
    costPerKilometer?: number;
    /**
     * The make of the Vehicle
     */
    make?: string;
    /**
     * The model of the Vehicle
     */
    model?: string;
    /**
     * The year the Vehicle was made
     */
    year?: string;
    /**
     * The Licence Plate Number of the Vehicle
     */
    licencePlateNumber?: string;
    /**
     * Optionally restrict this Vehicle to only be available to employees within these Organisation Groups
     */
    linkedOrgGroupIds?: Array<number>;
    /**
     * Whether or not this Vehicle is to be marked as deleted
     */
    isDeleted?: boolean;
}
