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


/**
 * An organisation group.  Organisation groups are used throughout ChronoSheets to assign many groups to one alert, action or restriction.  E.g. you can assign an organisation group to receive geofence alerts, or you could restrict access to vehicles to users within an organisation group.
 */
export interface OrganisationGroup { 
    /**
     * The ID of the organisation group
     */
    Id?: number;
    /**
     * The ID of the organisation
     */
    OrganisationId?: number;
    /**
     * The descriptive name of the organisation group
     */
    OrganisationGroupName?: string;
    /**
     * Whether or not the organisation group is deleted
     */
    IsDeleted?: boolean;
}

