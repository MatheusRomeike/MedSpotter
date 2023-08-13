import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideNgxMask,
} from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { DefaultPageLayoutComponent } from './pages/default-page-layout/default-page-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  providers: [provideNgxMask()],
  declarations: [
    AutoCompleteComponent,
    LoadingComponent,
    HeaderComponent,
    DefaultPageLayoutComponent,
    SidebarComponent,
  ],
  exports: [
    AutoCompleteComponent,
    LoadingComponent,
    ToastNoAnimationModule,
    RouterModule,
    NgbModule,
    DefaultPageLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FontAwesomeModule,
    MatExpansionModule,
    MatProgressBarModule,
    ToastNoAnimationModule.forRoot(),
    RouterModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
