import { Component } from '@angular/core';
import { SmartphoneserviceService } from "../smartphoneservice.service";
import { Content } from '../helper-files/content-interface';
import {FormsModule} from '@angular/forms';
import {EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  @Output() insertcontentevent = new EventEmitter();
  constructor(private smartphoneserviceService:SmartphoneserviceService) {
  }
  title: string;
  description: string;
  creator: string;
  imgURL: string;
  type: string;
  tags: string;

  addcontentitem(){
    var c:Content
    c={"id":-1,"title":this.title,"description":this.description,"creator":this.creator,"imgURL":this.imgURL,"type":this.type,"tags":this.tags.split(",")};
    this.smartphoneserviceService.addContent(c).subscribe();
    this.insertcontentevent.emit();
  }
}
