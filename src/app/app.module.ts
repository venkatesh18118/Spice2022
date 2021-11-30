import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ImpDatesComponent } from './imp-dates/imp-dates.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdvisoryCommitteeComponent } from './advisory-committee/advisory-committee.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { TechnicalCommitteeComponent } from './technical-committee/technical-committee.component';
import { BrouchereComponent } from './brouchere/brouchere.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SpeakersComponent,
    ContactUsComponent,
    ImpDatesComponent,
    RegistrationComponent,
    AdvisoryCommitteeComponent,
    GuidelinesComponent,
    TechnicalCommitteeComponent,
    BrouchereComponent,
    CallForPapersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
