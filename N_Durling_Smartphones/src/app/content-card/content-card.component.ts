import { Component,Input } from '@angular/core';
import {ContentListComponent} from '../content-list/content-list.component'
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
}
