import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input('title') accordionTitle: string;
  accordionOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }

}
