import { Component } from '@angular/core';
import {ContentListComponent} from '../content-list/content-list.component'
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  constructor(private content: ContentListComponent) {} 
  listdisplay(i:number){
    let l = this.content.contentList[i];
    return '<header>'+ '<p>'+l.id+'</p>'+
    '<h1>'+l.title+'</h1>'+
    '</header>'+
    '<p>'+l.description+'</p>'+
    '<p>'+l.creator+'</p>'+
    '<img src ='+l.imgURL+'>'+
    '<p>'+l.type+'</p>'+
    '<p>'+l.tags+'</p>'
}
}
