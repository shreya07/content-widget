import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";

/**
 * content document
 */
export interface Content {
  title: string;
  content: ContentItem[];
}

/**
 * Content item
 */
export interface ContentItem {
  title: string;
  thumbnail?: string;
  description?: string;
}

/**
 * Content widget component
 */
@Component({
  selector: 'app-content-widget',
  templateUrl: './content-widget.component.html',
  styleUrls: ['./content-widget.component.scss']
})
export class ContentWidgetComponent implements OnInit {

  BASE_URL = "/assets/images/";

  content: Content;
  currentCard = 0;
  error: string = "There was an error loading the content items";
  displayError: boolean = false;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent('/assets/data/content.json').then(content => {
      console.log(content);
      this.content = content;
    }).catch(error => {
      console.log(error);
      this.displayError = true;
    });
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

  /**
   * Display next content item
   * @param index current item index
     */
  nextCard(index) {
    this.currentCard = index + 1;
  }

  /**
   * Display previous content item
   * @param index current item index
     */
  previousCard(index) {
    this.currentCard = index - 1;
  }

}
