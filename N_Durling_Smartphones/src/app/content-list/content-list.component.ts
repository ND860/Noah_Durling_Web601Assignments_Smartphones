import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component'
import { TypesPipe } from '../types.pipe';
import { FormsModule } from '@angular/forms';
import { title } from 'process';
import { CreateContentComponent } from "../create-content/create-content.component";
import { SmartphoneserviceService } from "../smartphoneservice.service";
import {ModifyContentComponentComponent} from "../modify-content-component/modify-content-component.component";
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule,ContentCardComponent,TypesPipe,FormsModule,CreateContentComponent,ModifyContentComponentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent {
  contentList: Content[];
  searchfound: string;
  searchtext: string;
  errormessage:boolean = false;
  singlecontentitem: Content;
  constructor(private smartphoneserviceService:SmartphoneserviceService) {
  }
  ngOnInit(){
    this.smartphoneserviceService.getContentObs().subscribe(contentDb=>this.contentList=contentDb);
    this.smartphoneserviceService.getContentitem(1).subscribe(contentDb=>this.singlecontentitem=contentDb);
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
  insertcontentevent(){
    this.smartphoneserviceService.getContentObs().subscribe(contentDb=>this.contentList=contentDb);
    let newarray = this.contentList.slice()
    this.contentList=newarray
    this.errormessage=false
  }
}
