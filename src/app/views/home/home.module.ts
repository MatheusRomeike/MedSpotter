import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeRootComponent, SearchComponent],
  exports: [HomeRootComponent, SearchComponent],
})
export class HomeModule {}
