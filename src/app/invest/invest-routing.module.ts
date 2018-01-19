import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestComponent } from './invest.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { SpezAdvantagesComponent } from './spez-advantages/spez-advantages.component';
import { InvOpportunityComponent } from './inv-opportunity/inv-opportunity.component';
import { NeginProjectsComponent } from './negin-projects/negin-projects.component';
import { InvestorsComponent } from './investors/investors.component';
import { PortFacilitiesComponent } from './port-facilities/port-facilities.component';
import { InvestFlowComponent } from './invest-flow/invest-flow.component';
import { BuzTourismComponent } from './buz-tourism/buz-tourism.component';
import { InvFaqComponent } from './inv-faq/inv-faq.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'invest' },
  {
    path: 'invest', component: InvestComponent,
    children: [
    ]
  },
  { path: 'prospect', component: PerspectiveComponent },
  { path: 'advantages', component: SpezAdvantagesComponent },
  { path: 'opportunity', component: InvOpportunityComponent },
  { path: 'neginprojects', component: NeginProjectsComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'facilities', component: PortFacilitiesComponent },
  { path: 'investflow', component: InvestFlowComponent },
  { path: 'tourism', component: BuzTourismComponent },
  { path: 'invfaq', component: InvFaqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }
