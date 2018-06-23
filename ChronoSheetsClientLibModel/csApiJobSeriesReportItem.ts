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


export interface CsApiJobSeriesReportItem {
    startDate?: Date;
    endDate?: Date;
    jobId?: number;
    clientId?: number;
    clientName?: string;
    projectId?: number;
    projectName?: string;
    spanSeconds?: number;
    jobCode?: string;
}
