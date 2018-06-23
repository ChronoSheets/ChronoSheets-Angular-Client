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


export interface CsApiUpdateUserRequest {
    userId?: number;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    isSubscribedToNewsletter?: boolean;
    isAccountActive?: boolean;
    roles?: number;
    alertSettings?: number;
}
