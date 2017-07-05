import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";

@Component({
  selector: 'app-content-widget',
  templateUrl: './content-widget.component.html',
  styleUrls: ['./content-widget.component.css']
})
export class ContentWidgetComponent implements OnInit {

  content: any;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent('/assets/data/content.json').then(content => {
      console.log(content);
      this.content = content;
    })
  }

}
