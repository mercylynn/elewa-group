import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@elewa-group/elements/layout';
import { BannersModule } from '@elewa-group/features/components/banners';

import { ElewaBrandsOpportunitiesComponent } from './components/elewa-brands-opportunities/elewa-brands-opportunities.component';

import { ElewaBrandsPageComponent } from './pages/elewa-brands-page/elewa-brands-page/elewa-brands-page.component';

import { BrandsRoutingModule } from './brands.routing';
import { BrandsCreativeHubComponent } from './components/brands-creative-hub/brands-creative-hub.component';

@NgModule({
  imports: [CommonModule, LayoutModule, BannersModule, BrandsRoutingModule],
  declarations: [
    ElewaBrandsPageComponent,
    ElewaBrandsOpportunitiesComponent,
    BrandsCreativeHubComponent,
  ],
})
export class BrandsModule {}
