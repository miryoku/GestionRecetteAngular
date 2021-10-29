import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecetteComponent } from './component/list-recette/list-recette.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import { TokenInterceptor } from './core/Interceptors/token.interceptor';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    ListRecetteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass : TokenInterceptor,multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
