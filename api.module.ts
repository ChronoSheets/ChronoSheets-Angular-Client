import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AggregateJobTasksService } from './ChronoSheetsClientLibApi/aggregateJobTasks.service';
import { ClientsService } from './ChronoSheetsClientLibApi/clients.service';
import { FleetService } from './ChronoSheetsClientLibApi/fleet.service';
import { JobCodesService } from './ChronoSheetsClientLibApi/jobCodes.service';
import { OrganisationService } from './ChronoSheetsClientLibApi/organisation.service';
import { OrganisationGroupUsersService } from './ChronoSheetsClientLibApi/organisationGroupUsers.service';
import { OrganisationGroupsService } from './ChronoSheetsClientLibApi/organisationGroups.service';
import { ProjectsService } from './ChronoSheetsClientLibApi/projects.service';
import { ReportsService } from './ChronoSheetsClientLibApi/reports.service';
import { TasksService } from './ChronoSheetsClientLibApi/tasks.service';
import { TimesheetsService } from './ChronoSheetsClientLibApi/timesheets.service';
import { TripsService } from './ChronoSheetsClientLibApi/trips.service';
import { UserJobFavouritesService } from './ChronoSheetsClientLibApi/userJobFavourites.service';
import { UserPayRatesService } from './ChronoSheetsClientLibApi/userPayRates.service';
import { UserProfileService } from './ChronoSheetsClientLibApi/userProfile.service';
import { UsersService } from './ChronoSheetsClientLibApi/users.service';
import { UsualHoursService } from './ChronoSheetsClientLibApi/usualHours.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AggregateJobTasksService,
    ClientsService,
    FleetService,
    JobCodesService,
    OrganisationService,
    OrganisationGroupUsersService,
    OrganisationGroupsService,
    ProjectsService,
    ReportsService,
    TasksService,
    TimesheetsService,
    TripsService,
    UserJobFavouritesService,
    UserPayRatesService,
    UserProfileService,
    UsersService,
    UsualHoursService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
