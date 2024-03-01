import { Component, HostListener,Output,EventEmitter, Input  } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {FormsModule} from '@angular/forms';
import { ContentListComponent } from "../content-list/content-list.component";
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule,NgSwitch, NgSwitchCase],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  id: number;
  title: string;
  description: string;
  creator: string;
  imgURL: string;
  type: string;
  tags: string;
  insert(){
    let item:Content;
    if (this.type==undefined) {
      this.type=""
    }
    if (this.tags==undefined) {
      this.tags=""
    }
    item={"id":this.id,"title":this.title,"description":this.description,"creator":this.creator,"imgURL":this.imgURL,"type":this.type,"tags":this.tags.split(",")}
    this.insertcontentevent.emit(item);
  }
  @Output() insertcontentevent = new EventEmitter<Content>();
  @Input() error:boolean;
}
