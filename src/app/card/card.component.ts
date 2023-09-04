import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Output() onClickEvent = new EventEmitter();

  @Input({ required: true }) data!: string[];

  onClick(): void {
    this.onClickEvent.emit(this.data);
  }
}
