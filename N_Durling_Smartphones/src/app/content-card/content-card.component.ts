import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  content = new ContentList;
  constructor() {
    this.content.addlist({
      id: 0,
      title: "Iphone 7",
      description: "An old Iphone",
      creator: "Apple",
      imgURL: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-7-plus/iphone-7-plus-rose-gold.jpg",
      type: "Iphone"
    });
    this.content.addlist({
      id: 1,
      title: "Samsung s24",
      description: "The newsest samsung",
      creator: "Samsung",
      imgURL: "https://media.wired.com/photos/65a8644bf7b7607998696894/master/w_1600%2Cc_limit/galaxy-s24-marblegray-front_HI-SOURCE-Samsung.jpg",
      type: "Samsung"
    });
    this.content.addlist({
      id: 2,
      title: "Iphone 15",
      description: "The newsest Iphone",
      creator: "Apple",
      imgURL: "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=961,721,x344,y2,safe&width=960",
      type: "Iphone"
    });
  }
}
