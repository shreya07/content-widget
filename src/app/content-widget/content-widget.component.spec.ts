/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentWidgetComponent } from './content-widget.component';
import { AccordionComponent } from "../shared/accordion/accordion.component";
import { ContentService } from "../content.service";
import { Http } from "@angular/http";

describe('ContentWidgetComponent', () => {
  let component: ContentWidgetComponent;
  let fixture: ComponentFixture<ContentWidgetComponent>;
  let httpStub;

  beforeEach(async(() => {
    httpStub = {
      value: true
    };

    TestBed.configureTestingModule({
      declarations: [ ContentWidgetComponent, AccordionComponent ],
      providers: [ContentService, { provide: Http, useValue: httpStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
