import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction-service.service';

describe('TransactionServiceService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransactionService],
    });
    service = TestBed.inject(TransactionService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
