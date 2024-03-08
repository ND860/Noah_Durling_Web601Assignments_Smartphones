import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent} from './content-card/content-card.component'
import {ContentListComponent} from './content-list/content-list.component'
import { AppMessagesComponent } from "./app-messages/app-messages.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentCardComponent,ContentListComponent,AppMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'N_Durling_Smartphones';
}
