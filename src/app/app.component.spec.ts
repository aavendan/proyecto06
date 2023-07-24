import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

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

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the Header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });

  it('should have the Hero component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-hero')).not.toBe(null);
  });

  it('should have the About component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-about')).not.toBe(null);
  });

  it('should have the Footer component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).not.toBe(null);
  });

});
