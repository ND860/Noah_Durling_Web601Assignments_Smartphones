import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component'
import { TypesPipe } from '../types.pipe';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule,ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent {
  contentList: Content[];
  constructor() {
    this.contentList = [{
      id: 0,
      title: "Iphone 7",
      description: "An old Iphone",
      creator: "Apple",
      imgURL: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-7-plus/iphone-7-plus-rose-gold.jpg",
      type: "Iphone"
    },
    {
      id: 1,
      title: "Samsung s24",
      description: "The newsest samsung",
      creator: "Samsung",
      imgURL: "https://media.wired.com/photos/65a8644bf7b7607998696894/master/w_1600%2Cc_limit/galaxy-s24-marblegray-front_HI-SOURCE-Samsung.jpg",
      type: "Samsung"
    },
    {
      id: 2,
      title: "Iphone 15",
      description: "The newsest Iphone",
      creator: "Apple",
      imgURL: "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=961,721,x344,y2,safe&width=960",
      type: "Iphone"
    },
    {
      id: 3,
      title: "Samsung z flip",
      description: "a foldable phone",
      creator: "Samsung",
      imgURL: "https://img.global.news.samsung.com/global/wp-content/uploads/2020/02/Press-Thumbnail-1000x563-Galaxy-Z-Flip.jpg",
      type: "Samsung"
    },
    {
      id: 4,
      title: "google pixel 7",
      description: "An google pixel",
      creator: "Google",
      imgURL: "https://i5.walmartimages.com/asr/9484e5ef-3afc-40c9-9584-d6a7caf29af7.4b9b17360892dc216aefd4bf0f39b9f4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      type: "Pixel"
    },
    {
      id: 5,
      title: "google pixel 8",
      description: "The newsest Pixel phone",
      creator: "Google",
      imgURL: "https://m.media-amazon.com/images/I/81Mya-dPIOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 6,
      title: "Iphone 11 pro max",
      description: "The best Iphone 11",
      creator: "Apple",
      imgURL: "https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_UF894,1000_QL80_.jpg",
    }
  ]
  }
}
