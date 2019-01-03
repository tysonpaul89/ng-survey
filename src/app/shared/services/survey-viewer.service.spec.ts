import { TestBed } from '@angular/core/testing';

import { SurveyViewerService } from './survey-viewer.service';

describe('SurveyViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyViewerService = TestBed.get(SurveyViewerService);
    expect(service).toBeTruthy();
  });
});
