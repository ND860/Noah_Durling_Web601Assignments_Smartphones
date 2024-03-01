import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component'
import { TypesPipe } from '../types.pipe';
import { FormsModule } from '@angular/forms';
import { title } from 'process';
import { CreateContentComponent } from "../create-content/create-content.component";
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule,ContentCardComponent,TypesPipe,FormsModule,CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent {
  contentList: Content[];
  searchfound: string;
  searchtext: string;
  errormessage:boolean = false;
  constructor() {
    this.contentList = [{
      id: 0,
      title: "Iphone 7",
      description: "An old Iphone",
      creator: "Apple",
      imgURL: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-7-plus/iphone-7-plus-rose-gold.jpg",
      type: "Iphone",
      tags: ["apple","Iphone"]
    },
    {
      id: 1,
      title: "Samsung s24",
      description: "The newsest samsung",
      creator: "Samsung",
      imgURL: "https://media.wired.com/photos/65a8644bf7b7607998696894/master/w_1600%2Cc_limit/galaxy-s24-marblegray-front_HI-SOURCE-Samsung.jpg",
      type: "Samsung",
      tags: ["samsung"]
    },
    {
      id: 2,
      title: "Iphone 15",
      description: "The newsest Iphone",
      creator: "Apple",
      type: "Iphone",
      tags: ["apple","Iphone","cool"]
    },
    {
      id: 3,
      title: "Samsung z flip",
      description: "a foldable phone",
      creator: "Samsung",
      imgURL: "https://img.global.news.samsung.com/global/wp-content/uploads/2020/02/Press-Thumbnail-1000x563-Galaxy-Z-Flip.jpg",
      type: "Samsung",
      tags: ["Samsung","Flip"]
    },
    {
      id: 4,
      title: "google pixel 7",
      description: "An google pixel",
      creator: "Google",
      imgURL: "https://i5.walmartimages.com/asr/9484e5ef-3afc-40c9-9584-d6a7caf29af7.4b9b17360892dc216aefd4bf0f39b9f4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      type: "Pixel",
      tags: ["Pixel","Google"]
    },
    {
      id: 5,
      title: "google pixel 8",
      description: "The newsest Pixel phone",
      creator: "Google",
      tags: ["Google","Pixel"]
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
  search(){
    if (this.searchtext=="") {
      this.searchfound=""
    }
    else if (this.contentList.filter(item => item.title===this.searchtext).length>0) {
      this.searchfound="true"
    }
    else{
      this.searchfound="false"
    }
  }
  insertcontentevent(item:Content){
    let createPromise = new Promise((pass, fail) =>{
      try {
        this.contentList.push(item)
        pass("ok")
      } catch (error) {
        fail("no")
      }

    })
    createPromise.then(successResult =>{
      let newarray = this.contentList.slice()
      this.contentList=newarray
      this.errormessage=false
    })
      .catch(failResult => this.errormessage=true);
  }
}
