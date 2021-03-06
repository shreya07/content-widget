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

  /**
   * Toggle the accordion on or off
   */
  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }

}
