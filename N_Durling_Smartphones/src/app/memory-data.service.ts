import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from './helper-files/content-interface';
import { contentDb } from './helper-files/contentDb';
@Injectable({
  providedIn: 'root'
})
export class MemoryDataService  implements InMemoryDbService {
  createDb() {
    const content : Content[] = contentDb;
    return {content};
    }
    
    genId(content: Content[]): number {
      var maxval:any = content.map(c => c.id)
      return content.length > 0 ?
      Math.max(maxval) + 1 : 2000;
      }
  constructor() { }
}
