import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { InvestRoutingModule } from './/invest-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { InvOpportunityComponent } from './inv-opportunity/inv-opportunity.component';
import { SpezAdvantagesComponent } from './spez-advantages/spez-advantages.component';
import { BuzTourismComponent } from './buz-tourism/buz-tourism.component';
import { PortFacilitiesComponent } from './port-facilities/port-facilities.component';
import { InvFaqComponent } from './inv-faq/inv-faq.component';

@NgModule({
  imports: [
    CommonModule,
    InvestRoutingModule,
    MaterialModule
  ],
  declarations: [MainComponent, SlideshowComponent, StakeholdersComponent, PerspectiveComponent, InvOpportunityComponent, SpezAdvantagesComponent, BuzTourismComponent, PortFacilitiesComponent, InvFaqComponent]
})
export class InvestModule { }
