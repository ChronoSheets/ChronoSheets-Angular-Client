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
import { CSAggregateProject } from './cSCSAggregateProject';


export interface CSAggregateClient { 
    /**
     * A list of projects that are under this client
     */
    clientProjects?: Array<CSAggregateProject>;
    /**
     * The ID of the client
     */
    id?: number;
    /**
     * The ID of your organisation
     */
    organisationId?: number;
    /**
     * The name of the client
     */
    clientName?: string;
    /**
     * The address line 1 of the client
     */
    clientAddressLine1?: string;
    /**
     * The address line 2 of the client
     */
    clientAddressLine2?: string;
    /**
     * The address suburb of the client
     */
    clientSuburb?: string;
    /**
     * The address state of the client
     */
    clientState?: string;
    /**
     * The postcode of the client
     */
    clientPostCode?: string;
    /**
     * The contact person working under the client
     */
    personOfContact?: string;
    /**
     * The phone number of the client
     */
    clientPhoneNumber?: string;
    /**
     * The mobile phone number of the client
     */
    clientMobileNumber?: string;
    /**
     * The email address of the client
     */
    clientEmailAddress?: string;
    /**
     * The website URL of the client
     */
    clientWebURL?: string;
    /**
     * The number of projects under the client
     */
    projectCount?: number;
}
