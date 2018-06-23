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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CsApiCsApiApiResponseForPaginatedListTrip } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseForPaginatedListTrip';
import { CsApiCsApiApiResponseInt32 } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseInt32';
import { CsApiCsApiApiResponseTrip } from '../ChronoSheetsClientLibModel/csApiCsApiApiResponseTrip';
import { CsApiCsApiCreateTripRequest } from '../ChronoSheetsClientLibModel/csApiCsApiCreateTripRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TripsService {

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
     * Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.
     * 
     * @param request The create trip request
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsCreateTrip(request: CsApiCreateTripRequest, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseInt32>;
    public tripsCreateTrip(request: CsApiCreateTripRequest, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseInt32>>;
    public tripsCreateTrip(request: CsApiCreateTripRequest, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseInt32>>;
    public tripsCreateTrip(request: CsApiCreateTripRequest, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling tripsCreateTrip.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsCreateTrip.');
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

        return this.httpClient.post<CsApiApiResponseInt32>(`${this.basePath}/api/Trips/CreateTrip`,
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
     * Get trip by Id
     * 
     * @param tripId The ID of the trip
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseTrip>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseTrip>>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseTrip>>;
    public tripsGetMyTripById(tripId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (tripId === null || tripId === undefined) {
            throw new Error('Required parameter tripId was null or undefined when calling tripsGetMyTripById.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsGetMyTripById.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (tripId !== undefined) {
            queryParameters = queryParameters.set('TripId', <any>tripId);
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

        return this.httpClient.get<CsApiApiResponseTrip>(`${this.basePath}/api/Trips/GetMyTripById`,
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
     * Get my trips
     * 
     * @param startDate 
     * @param endDate 
     * @param skip 
     * @param take 
     * @param vehicleId 
     * @param xChronosheetsAuth The ChronoSheets Auth Token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public tripsGetMyTrips(startDate: Date, endDate: Date, skip: number, take: number, vehicleId: number, xChronosheetsAuth: string, observe?: 'body', reportProgress?: boolean): Observable<CsApiApiResponseForPaginatedListTrip>;
    public tripsGetMyTrips(startDate: Date, endDate: Date, skip: number, take: number, vehicleId: number, xChronosheetsAuth: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CsApiApiResponseForPaginatedListTrip>>;
    public tripsGetMyTrips(startDate: Date, endDate: Date, skip: number, take: number, vehicleId: number, xChronosheetsAuth: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CsApiApiResponseForPaginatedListTrip>>;
    public tripsGetMyTrips(startDate: Date, endDate: Date, skip: number, take: number, vehicleId: number, xChronosheetsAuth: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling tripsGetMyTrips.');
        }
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling tripsGetMyTrips.');
        }
        if (skip === null || skip === undefined) {
            throw new Error('Required parameter skip was null or undefined when calling tripsGetMyTrips.');
        }
        if (take === null || take === undefined) {
            throw new Error('Required parameter take was null or undefined when calling tripsGetMyTrips.');
        }
        if (vehicleId === null || vehicleId === undefined) {
            throw new Error('Required parameter vehicleId was null or undefined when calling tripsGetMyTrips.');
        }
        if (xChronosheetsAuth === null || xChronosheetsAuth === undefined) {
            throw new Error('Required parameter xChronosheetsAuth was null or undefined when calling tripsGetMyTrips.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (startDate !== undefined) {
            queryParameters = queryParameters.set('StartDate', <any>startDate.toISOString());
        }
        if (endDate !== undefined) {
            queryParameters = queryParameters.set('EndDate', <any>endDate.toISOString());
        }
        if (skip !== undefined) {
            queryParameters = queryParameters.set('Skip', <any>skip);
        }
        if (take !== undefined) {
            queryParameters = queryParameters.set('Take', <any>take);
        }
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

        return this.httpClient.get<CsApiApiResponseForPaginatedListTrip>(`${this.basePath}/api/Trips/GetMyTrips`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
