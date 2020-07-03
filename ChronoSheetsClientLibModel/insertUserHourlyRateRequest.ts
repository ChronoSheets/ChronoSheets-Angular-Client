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
 * Fields for inserting a new set of Pay Rates for a user.  Archiving of the previous Pay Rate is done for you automatically
 */
export interface InsertUserHourlyRateRequest { 
    /**
     * The Id of the User that is getting the new set of Pay Rates
     */
    UserId?: number;
    /**
     * The Hourly Rate the employee should receive during their usual rostered hours
     */
    HourlyRate?: number;
    /**
     * The Hourly Rate the employee should receive during outside of their usual rostered hours
     */
    HourlyOvertimeRate?: number;
    /**
     * The current date time
     */
    CurrentDate?: string;
}
