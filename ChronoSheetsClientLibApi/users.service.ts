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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ApiResponseInsertUserResponse } from '../model/models';
import { ApiResponseListUserForManagement } from '../model/models';
import { ApiResponseUpdateUserResponse } from '../model/models';
import { ApiResponseUserForManagement } from '../model/models';
import { InsertUserRequest } from '../model/models';
import { UpdateUserRequest } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

    protected basePath = 'https://api.chronosheets.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create a user account in your organisation.  Requires the \&#39;ManageOrganisationUsers\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request An Insert User Request object containing values for the new User to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersCreateTimesheetUser(xChronosheetsAuth: string, request: InsertUserRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseInsertUserResponse>;
    public usersCreateTimesheetUser(xChronosheetsAuth: string, request: InsertUserRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseInsertUserResponse>>;
    public usersCreateTimesheetUser(xChronosheetsAuth: string, request: InsertUserRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseInsertUserResponse>>;
    public usersCreateTimesheetUser(xChronosheetsAuth: string, request: InsertUserRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling usersCreateTimesheetUser.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersCreateTimesheetUser.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<ApiResponseInsertUserResponse>(`${this.configuration.basePath}/Users/CreateTimesheetUser`,
            request,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a particular user in your organisation.  Requires the \&#39;ManageOrganisationUsers\&#39; or \&#39;ManageOrganisationGroups\&#39; permissions.
     * @param userId The User ID of the UserForManagement you want to get
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetTimesheetUser(userId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseUserForManagement>;
    public usersGetTimesheetUser(userId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseUserForManagement>>;
    public usersGetTimesheetUser(userId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseUserForManagement>>;
    public usersGetTimesheetUser(userId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling usersGetTimesheetUser.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling usersGetTimesheetUser.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userId !== undefined && userId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>userId, 'UserId');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<ApiResponseUserForManagement>(`${this.configuration.basePath}/Users/GetTimesheetUser`,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get users accounts in your organisation.  Requires the \&#39;ManageOrganisationUsers\&#39; or \&#39;ManageOrganisationGroups\&#39; permissions.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersGetTimesheetUsers(xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseListUserForManagement>;
    public usersGetTimesheetUsers(xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseListUserForManagement>>;
    public usersGetTimesheetUsers(xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseListUserForManagement>>;
    public usersGetTimesheetUsers(xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling usersGetTimesheetUsers.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<ApiResponseListUserForManagement>(`${this.configuration.basePath}/Users/GetTimesheetUsers`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a user account.  Requires the \&#39;ManageOrganisationUsers\&#39; permission.
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param request A Update User Request object containing updated fields.  Make sure to specify the User Id in the request object so that ChronoSheets knows which User to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersUpdateTimesheetUser(xChronosheetsAuth: string, request: UpdateUserRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<ApiResponseUpdateUserResponse>;
    public usersUpdateTimesheetUser(xChronosheetsAuth: string, request: UpdateUserRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpResponse<ApiResponseUpdateUserResponse>>;
    public usersUpdateTimesheetUser(xChronosheetsAuth: string, request: UpdateUserRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<HttpEvent<ApiResponseUpdateUserResponse>>;
    public usersUpdateTimesheetUser(xChronosheetsAuth: string, request: UpdateUserRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'text/json' | 'application/xml' | 'text/xml' | 'multipart/form-data'}): Observable<any> {
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling usersUpdateTimesheetUser.');
        }
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling usersUpdateTimesheetUser.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'text/json',
                'application/xml',
                'text/xml',
                'multipart/form-data'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<ApiResponseUpdateUserResponse>(`${this.configuration.basePath}/Users/UpdateTimesheetUser`,
            request,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
