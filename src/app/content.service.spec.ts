/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentService } from './content.service';
import { Http } from "@angular/http";



describe('ContentService', () => {
  let httpStub;
  beforeEach(() => {

    httpStub = {
      value: true
    };

    TestBed.configureTestingModule({
      providers: [ContentService, { provide: Http, useValue: httpStub }]
    });

    // TestBed.overrideComponent(ContentService, {
    //   set: {
    //     providers: [
    //       { provide: Http, useClass: httpStub }
    //     ]
    //   }
    // });
  });

  it('should ...', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));
});
