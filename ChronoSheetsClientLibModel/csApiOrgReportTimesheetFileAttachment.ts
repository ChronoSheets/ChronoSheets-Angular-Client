/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface CsApiOrgReportTimesheetFileAttachment {
    username?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    timesheetStart?: Date;
    timesheetEnd?: Date;
    timesheetId?: number;
    documentS3SignedUrl?: string;
    imageLargeS3SignedUrl?: string;
    imageMediumS3SignedUrl?: string;
    imageSmallS3SignedUrl?: string;
    fileAttachmentId?: number;
    userId?: number;
    orgId?: number;
    /**
     * 0 = Unknown, 1 = iOS, 2 = Android
     */
    mobilePlatform?: CsApiOrgReportTimesheetFileAttachment.CsApiMobilePlatformEnum;
    /**
     * 1 = Image, 30 = WordDoc, 31 = Pdf, 32 = MSSpreadSheet, 33 = MSPowerPoint, 34 = RichTextFormat, 35 = ZipFile, 100 = Other
     */
    attachmentType?: CsApiOrgReportTimesheetFileAttachment.CsApiAttachmentTypeEnum;
    notes?: string;
    nonImageFilePath?: string;
    imageLargeFilePath?: string;
    imageMediumFilePath?: string;
    imageSmallFilePath?: string;
    originalFileName?: string;
    latitude?: number;
    longitude?: number;
    dateUploaded?: Date;
    dateImageCaptured?: Date;
    storageAllocationBytes?: number;
}
export namespace CsApiOrgReportTimesheetFileAttachment {
    export type CsApiMobilePlatformEnum = 0 | 1 | 2;
    export const CsApiMobilePlatformEnum = {
        NUMBER_0: 0 as CsApiMobilePlatformEnum,
        NUMBER_1: 1 as CsApiMobilePlatformEnum,
        NUMBER_2: 2 as CsApiMobilePlatformEnum
    }
    export type CsApiAttachmentTypeEnum = 1 | 30 | 31 | 32 | 33 | 34 | 35 | 100;
    export const CsApiAttachmentTypeEnum = {
        NUMBER_1: 1 as CsApiAttachmentTypeEnum,
        NUMBER_30: 30 as CsApiAttachmentTypeEnum,
        NUMBER_31: 31 as CsApiAttachmentTypeEnum,
        NUMBER_32: 32 as CsApiAttachmentTypeEnum,
        NUMBER_33: 33 as CsApiAttachmentTypeEnum,
        NUMBER_34: 34 as CsApiAttachmentTypeEnum,
        NUMBER_35: 35 as CsApiAttachmentTypeEnum,
        NUMBER_100: 100 as CsApiAttachmentTypeEnum
    }
}