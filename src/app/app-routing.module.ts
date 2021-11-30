import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisoryCommitteeComponent } from './advisory-committee/advisory-committee.component';
import { BrouchereComponent } from './brouchere/brouchere.component';
import { CallForPapersComponent } from './call-for-papers/call-for-papers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { HomeComponent } from './home/home.component';
import { ImpDatesComponent } from './imp-dates/imp-dates.component';
import { RegistrationComponent } from './registration/registration.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TechnicalCommitteeComponent } from './technical-committee/technical-committee.component';

const routes: Routes = [
  {path:"" ,redirectTo:"/home",pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"speakers", component: SpeakersComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"dates", component: ImpDatesComponent},
  {path:"registration", component: RegistrationComponent},
  {path:"advisory-committee", component: AdvisoryCommitteeComponent},
  {path:"guidelines", component: GuidelinesComponent},
  {path:"technical-committee", component: TechnicalCommitteeComponent},
  {path:"brochure", component: BrouchereComponent},
  {path:"call-for-papers",component: CallForPapersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
