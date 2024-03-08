import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent {
  constructor(public messageService: MessagesService) {}
}
