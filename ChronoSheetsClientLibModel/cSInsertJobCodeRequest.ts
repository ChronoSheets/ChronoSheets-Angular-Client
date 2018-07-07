/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * Fields for inserting a new Job Code
 */
export interface CSInsertJobCodeRequest {
    /**
     * A short code for the Job.  This is referred to as a Job Code
     */
    code?: string;
    /**
     * The linked Project.  Time spent with this JobCode is on this Project
     */
    projectId?: number;
    /**
     * The linked Client.  Time spent with this JobCode is for this Client
     */
    clientId?: number;
    /**
     * A list of Task Ids.  This are the Tasks that become available to the employee when they select this JobCode
     */
    linkedTaskIds?: Array<number>;
    /**
     * Optionally restrict access to the JobCode by specifying which Organisation Groups can use it
     */
    linkedOrgGroupIds?: Array<number>;
}