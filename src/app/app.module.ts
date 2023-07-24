import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/main/featured/featured.component';
import { AboutComponent } from './components/main/about/about.component';
import { CountsComponent } from './components/main/counts/counts.component';
import { ServicesComponent } from './components/main/services/services.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/main/testimonials/testimonials.component';
import { CtaComponent } from './components/main/cta/cta.component';
import { TeamComponent } from './components/main/team/team.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturedComponent,
    AboutComponent,
    CountsComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CtaComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
