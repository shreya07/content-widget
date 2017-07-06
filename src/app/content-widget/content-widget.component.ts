import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";

export class Content {
  private title: string;
  private content: ContentItem[];
}

export interface ContentItem {
  title: string;
  thumbnail?: string;
  description?: string;
}

@Component({
  selector: 'app-content-widget',
  templateUrl: './content-widget.component.html',
  styleUrls: ['./content-widget.component.scss']
})
export class ContentWidgetComponent implements OnInit {

  BASE_URL = "/assets/images/";

  content: Content;
  currentCard = 0;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent('/assets/data/content.json').then(content => {
      console.log(content);
      this.content = content;
    })
  }

  /**
   * Construct full path to the thumbnail image
   * @param imageName
   * @returns {string}
     */
  getThumbnailPath(imageName: string) {
    if(imageName === undefined || imageName === "") {
      return this.BASE_URL + "ipad-mini.jpg"; //Using ipad-mini as the placeholder image
    } else {
      return this.BASE_URL + imageName;
    }
  }

  nextCard(index) {
    this.currentCard = index + 1;
  }

  previousCard(index) {
    this.currentCard = index - 1;
  }

}
