import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { SearchComponent } from './search/search.component';
import { CardResultComponent } from './search/card-result/card-result.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeRootComponent, SearchComponent, CardResultComponent],
  exports: [HomeRootComponent, SearchComponent, CardResultComponent],
})
export class HomeModule {}
