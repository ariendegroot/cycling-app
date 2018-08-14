// modules
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities/activities.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { StatsComponent } from './stats/stats.component';
import { UserComponent } from './user/user.component';

// locale
import localeNL from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';

// other
import { MatCardModule } from '@angular/material/card';
import { NotFoundComponent } from './not-found/not-found.component';
registerLocaleData(localeNL, 'nl')


const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full' },
  { path: 'activities',
    children: [
      {path: '', component: ActivitiesComponent},
      {path: 'detail/:id', component: ActivityDetailComponent }
    ]
  },
  { path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityDetailComponent,
    StatsComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
