import { Component,Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import {HoveraffectDirective} from '../hoveraffect.directive';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,HoveraffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() card: Content;
  @Input() single: boolean
  constructor() {
  }
  onclick(i: number,t: string){
    console.log(i,t);
  }
}
