import { Component, Input } from '@angular/core';

@Component({
    selector: 'pm-card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @Input() title: string = '';
};
