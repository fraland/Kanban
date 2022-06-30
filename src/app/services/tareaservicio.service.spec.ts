import { TestBed } from '@angular/core/testing';

import { TareaservicioService } from './tareaservicio.service';

describe('TareaservicioService', () => {
  let service: TareaservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
