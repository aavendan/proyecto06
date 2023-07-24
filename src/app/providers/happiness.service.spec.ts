import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HappinessService } from './happiness.service';
import { Data } from '../interfaces/data';

describe('HappinessService', () => {
  let service: HappinessService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ HappinessService ]
    });
    service = TestBed.inject(HappinessService);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResponse should return value from observable',
    (done: DoneFn) => {
    service.getResponse().subscribe(data => {
      expect((data as Data[]).length).toBeGreaterThan(0)
      done();
    });
  });

});
