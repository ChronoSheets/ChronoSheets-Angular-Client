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
 * Field for updating your Organisation
 */
export interface CSUpdateOrganisationRequest { 
    /**
     * The Id of your Organisation.  This is validated based on your current Auth Token
     */
    organsationId?: number;
    /**
     * The updated organisation name
     */
    organisationName?: string;
    /**
     * The updated Address Line 1 value
     */
    addressLine01?: string;
    /**
     * The updated Address Line 2 value
     */
    addressLine02?: string;
    /**
     * The updated address suburb
     */
    organisationSuburb?: string;
    /**
     * The updated address state
     */
    organisationState?: string;
    /**
     * The updated address postcode
     */
    organisationPostcode?: string;
    /**
     * The updated address country
     */
    organisationCountry?: string;
    /**
     * The updated contact phone number
     */
    organisationPhone?: string;
    /**
     * The update organisation email address
     */
    organisationEmailAddress?: string;
}
