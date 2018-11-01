import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OnCreate } from './onCreate.directive';

import { DataServiceService } from '../app/services/data-service.service';
import { RepositoryService } from '../app/services/repository.service';

import { DataTablesModule } from 'angular-datatables';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderModule } from 'ngx-order-pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main',      component: MainComponent },
  { path: 'footer',      component: FooterComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OnCreate,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    OrderModule
  ],
  providers: [ 
    DataServiceService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
