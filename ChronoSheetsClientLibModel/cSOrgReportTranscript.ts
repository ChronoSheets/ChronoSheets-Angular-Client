/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface CSOrgReportTranscript {
    finishedJob?: boolean;
    completedProcessing?: Date;
    created?: Date;
    startedProcessing?: Date;
    transcriptionId?: number;
    jobName?: string;
    contents?: string;
    mediaType?: CSOrgReportTranscript.CSMediaTypeEnum;
    transcriptionStatus?: CSOrgReportTranscript.CSTranscriptionStatusEnum;
    username?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    timesheetId?: number;
    documentS3SignedUrl?: string;
    imageLargeS3SignedUrl?: string;
    imageMediumS3SignedUrl?: string;
    imageSmallS3SignedUrl?: string;
    timesheetStart?: Date;
    timesheetEnd?: Date;
    fileAttachmentId?: number;
    userId?: number;
    orgId?: number;
    mobilePlatform?: CSOrgReportTranscript.CSMobilePlatformEnum;
    attachmentType?: CSOrgReportTranscript.CSAttachmentTypeEnum;
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
    audioDurationSeconds?: number;
}
export namespace CSOrgReportTranscript {
    export type CSMediaTypeEnum = 'Other' | 'Mp3' | 'Mp4' | 'Wav' | 'Flac';
    export const CSMediaTypeEnum = {
        Other: 'Other' as CSMediaTypeEnum,
        Mp3: 'Mp3' as CSMediaTypeEnum,
        Mp4: 'Mp4' as CSMediaTypeEnum,
        Wav: 'Wav' as CSMediaTypeEnum,
        Flac: 'Flac' as CSMediaTypeEnum
    }
    export type CSTranscriptionStatusEnum = 'Saved' | 'Processing' | 'Completed' | 'FailedWithError';
    export const CSTranscriptionStatusEnum = {
        Saved: 'Saved' as CSTranscriptionStatusEnum,
        Processing: 'Processing' as CSTranscriptionStatusEnum,
        Completed: 'Completed' as CSTranscriptionStatusEnum,
        FailedWithError: 'FailedWithError' as CSTranscriptionStatusEnum
    }
    export type CSMobilePlatformEnum = 'Unknown' | 'iOS' | 'Android';
    export const CSMobilePlatformEnum = {
        Unknown: 'Unknown' as CSMobilePlatformEnum,
        IOS: 'iOS' as CSMobilePlatformEnum,
        Android: 'Android' as CSMobilePlatformEnum
    }
    export type CSAttachmentTypeEnum = 'Image' | 'WordDoc' | 'Pdf' | 'MSSpreadSheet' | 'MSPowerPoint' | 'RichTextFormat' | 'ZipFile' | 'Other' | 'Audio';
    export const CSAttachmentTypeEnum = {
        Image: 'Image' as CSAttachmentTypeEnum,
        WordDoc: 'WordDoc' as CSAttachmentTypeEnum,
        Pdf: 'Pdf' as CSAttachmentTypeEnum,
        MSSpreadSheet: 'MSSpreadSheet' as CSAttachmentTypeEnum,
        MSPowerPoint: 'MSPowerPoint' as CSAttachmentTypeEnum,
        RichTextFormat: 'RichTextFormat' as CSAttachmentTypeEnum,
        ZipFile: 'ZipFile' as CSAttachmentTypeEnum,
        Other: 'Other' as CSAttachmentTypeEnum,
        Audio: 'Audio' as CSAttachmentTypeEnum
    }
}
