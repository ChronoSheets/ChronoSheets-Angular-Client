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


export interface CSJobCode { 
    /**
     * The ID of the job code (not the code itself)
     */
    id?: number;
    /**
     * The job code itself
     */
    code?: string;
    /**
     * The name of the client
     */
    client?: string;
    /**
     * The ID of the client
     */
    clientId?: number;
    /**
     * The name of the project
     */
    project?: string;
    /**
     * The ID of the project
     */
    projectId?: number;
    /**
     * Your organisation ID
     */
    organisationId?: number;
    /**
     * A flag indicating whether or not the job code has been marked as deleted
     */
    isDeleted?: boolean;
}
