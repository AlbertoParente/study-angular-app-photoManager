import { Component, Input } from '@angular/core';

@Component({
    selector: 'pm-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {
    @Input() text = '';
};
