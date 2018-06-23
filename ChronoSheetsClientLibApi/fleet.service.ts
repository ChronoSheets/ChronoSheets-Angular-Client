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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CsApiCsApiApiResponseBoolean } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseBoolean';
import { CsApiCsApiApiResponseFleetVehicle } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseFleetVehicle';
import { CsApiCsApiApiResponseInt32 } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseInt32';
import { CsApiCsApiApiResponseListFleetVehicle } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseListFleetVehicle';
import { CsApiCsApiInsertVehicleRequest } from '../ChronoSheetsClientLibModel/csApiCsApiInsertVehicleRequest';
import { CsApiCsApiSaveVehicleRequest } from '../ChronoSheetsClientLibModel/csApiCsApiSaveVehicleRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FleetService {

    protected basePath = 'https://www.chronosheets.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create a vehicle
     * 
     * @param request 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fleetCreateVehicle(request: CsApiInsertVehicleRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseInt32>;
    public fleetCreateVehicle(request: CsApiInsertVehicleRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseInt32>>;
    public fleetCreateVehicle(request: CsApiInsertVehicleRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseInt32>>;
    public fleetCreateVehicle(request: CsApiInsertVehicleRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling fleetCreateVehicle.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling fleetCreateVehicle.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<CsApiApiResponseInt32>(`${this.basePath}/api/Fleet/CreateVehicle`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a particular vehicle
     * 
     * @param vehicleId The ID of the vehicle you want to get
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fleetGetVehicleById(vehicleId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseFleetVehicle>;
    public fleetGetVehicleById(vehicleId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseFleetVehicle>>;
    public fleetGetVehicleById(vehicleId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseFleetVehicle>>;
    public fleetGetVehicleById(vehicleId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (vehicleId === null || vehicleId === undefined) {
            throw new Error('Required parameter vehicleId was null or undefined when calling fleetGetVehicleById.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling fleetGetVehicleById.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (vehicleId !== undefined) {
            queryParameters = queryParameters.set('VehicleId', <any>vehicleId);
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<CsApiApiResponseFleetVehicle>(`${this.basePath}/api/Fleet/GetVehicleById`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a collection of vehicles that are under your organisation
     * 
     * @param includeDeleted 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fleetGetVehicles(includeDeleted: boolean, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseListFleetVehicle>;
    public fleetGetVehicles(includeDeleted: boolean, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseListFleetVehicle>>;
    public fleetGetVehicles(includeDeleted: boolean, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseListFleetVehicle>>;
    public fleetGetVehicles(includeDeleted: boolean, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (includeDeleted === null || includeDeleted === undefined) {
            throw new Error('Required parameter includeDeleted was null or undefined when calling fleetGetVehicles.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling fleetGetVehicles.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (includeDeleted !== undefined) {
            queryParameters = queryParameters.set('IncludeDeleted', <any>includeDeleted);
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<CsApiApiResponseListFleetVehicle>(`${this.basePath}/api/Fleet/GetVehicles`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a vehicle
     * 
     * @param request 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public fleetUpdateVehicle(request: CsApiSaveVehicleRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseBoolean>;
    public fleetUpdateVehicle(request: CsApiSaveVehicleRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseBoolean>>;
    public fleetUpdateVehicle(request: CsApiSaveVehicleRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseBoolean>>;
    public fleetUpdateVehicle(request: CsApiSaveVehicleRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling fleetUpdateVehicle.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling fleetUpdateVehicle.');
        }

        let headers = this.defaultHeaders;
        if (xChronosheetsAuth !== undefined && xChronosheetsAuth !== null) {
            headers = headers.set('x-chronosheets-auth', String(xChronosheetsAuth));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'multipart/form-data'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'multipart/form-data'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<CsApiApiResponseBoolean>(`${this.basePath}/api/Fleet/UpdateVehicle`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}