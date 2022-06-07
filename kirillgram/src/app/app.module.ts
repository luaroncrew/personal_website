import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SharedElementsComponent } from './shared-elements/shared-elements.component';
import { HeaderComponent } from './shared-elements/header/header.component';
import { FooterComponent } from './shared-elements/footer/footer.component';
import { OneExperienceComponent } from './experiences/one-experience/one-experience.component'

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    SharedElementsComponent,
    HeaderComponent,
    FooterComponent,
    OneExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
