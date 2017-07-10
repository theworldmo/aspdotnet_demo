import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { UniversalModule } from '@angular2-universal';

import { AppComponent } from './components/app/app.component'
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { OptimityComponent } from './components/optimity/optimity.component';
import { TaskService } from './services/task.service';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleService } from './services/vehicle.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        OptimityComponent,
        VehicleFormComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'optimity', component: OptimityComponent },
            { path: 'vehicle/new', component: VehicleFormComponent },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent }
            //{ path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        VehicleService, 
        TaskService
    ]
};
