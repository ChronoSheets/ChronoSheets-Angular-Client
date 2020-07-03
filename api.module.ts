import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AggregateClientProjectsService } from './ChronoSheetsClientLibApi/aggregateClientProjects.service';
import { AggregateJobTasksService } from './ChronoSheetsClientLibApi/aggregateJobTasks.service';
import { ClientsService } from './ChronoSheetsClientLibApi/clients.service';
import { FileAttachmentsService } from './ChronoSheetsClientLibApi/fileAttachments.service';
import { FleetService } from './ChronoSheetsClientLibApi/fleet.service';
import { GeoFencingService } from './ChronoSheetsClientLibApi/geoFencing.service';
import { JobCodesService } from './ChronoSheetsClientLibApi/jobCodes.service';
import { OrganisationService } from './ChronoSheetsClientLibApi/organisation.service';
import { OrganisationGroupUsersService } from './ChronoSheetsClientLibApi/organisationGroupUsers.service';
import { OrganisationGroupsService } from './ChronoSheetsClientLibApi/organisationGroups.service';
import { ProjectsService } from './ChronoSheetsClientLibApi/projects.service';
import { ReportsService } from './ChronoSheetsClientLibApi/reports.service';
import { TasksService } from './ChronoSheetsClientLibApi/tasks.service';
import { TimesheetAutomationService } from './ChronoSheetsClientLibApi/timesheetAutomation.service';
import { TimesheetsService } from './ChronoSheetsClientLibApi/timesheets.service';
import { TranscriptsService } from './ChronoSheetsClientLibApi/transcripts.service';
import { TripsService } from './ChronoSheetsClientLibApi/trips.service';
import { UserJobFavouritesService } from './ChronoSheetsClientLibApi/userJobFavourites.service';
import { UserPayRatesService } from './ChronoSheetsClientLibApi/userPayRates.service';
import { UserProfileService } from './ChronoSheetsClientLibApi/userProfile.service';
import { UsersService } from './ChronoSheetsClientLibApi/users.service';
import { UsualHoursService } from './ChronoSheetsClientLibApi/usualHours.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
