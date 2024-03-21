import { Injectable } from '@angular/core';
import { contentDb } from "../app/helper-files/contentDb";
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SmartphoneserviceService {
  constructor(private messageService: MessagesService, private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content array loaded!');
    return this.http.get<Content[]>("api/content");
  }
  getContentitem(id: number): Observable<Content> {
    this.messageService.add('Content Item at id: ' + id);
    return of(contentDb[id]);
  }
  addContent(newContentItem: Content):Observable<Content> {
    this.messageService.add('Content Item adeded');
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content"
      , contentItem,
      this.httpOptions);
  }
}
