import { TestBed, inject } from '@angular/core/testing';

import { VisitService } from './visit.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VisitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VisitService]
    });
  });

  it('should be created', inject([VisitService], (service: VisitService) => {
    expect(service).toBeTruthy();
  }));
});
