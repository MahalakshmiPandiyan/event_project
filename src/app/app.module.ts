import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TableComponent } from './table/table.component';
import { VenueComponent } from './venue/venue.component';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { EditComponent } from './edit/edit.component';
import { OrganiserComponent } from './organiser/organiser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EventComponent,
    TableComponent,
    VenueComponent,
    FeaturesComponent,
    EditComponent,
    OrganiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
