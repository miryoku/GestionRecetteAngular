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
import { RecetteComponent } from './component/recette/recette.component';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListRecetteComponent,
    LoginComponent,
    RecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass : TokenInterceptor,multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
