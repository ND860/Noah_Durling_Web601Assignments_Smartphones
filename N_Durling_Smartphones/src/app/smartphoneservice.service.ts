import { Injectable } from '@angular/core';
import { contentDb } from "../app/helper-files/contentDb";
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root'
})
export class SmartphoneserviceService {

  constructor(private messageService: MessagesService) { }
  getContentObs() : Observable<Content[]>{
    this.messageService.add('Content array loaded!');
    return of(contentDb);
  }
  getContentitem(id: number) : Observable<Content>{
    this.messageService.add('Content Item at id: '+id);
    return of(contentDb[id]);
  }
}
