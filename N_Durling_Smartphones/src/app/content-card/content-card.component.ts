import { Component,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() card: Content;
  constructor() {
  }
  onclick(i: number,t: string){
    console.log(i,t);
  }
}
