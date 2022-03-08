import { Component, Input } from "@angular/core";
import { Subject } from 'rxjs';
import { Alert } from './alert';
import { AlertService } from './alert.service';

Component({
    selector: 'pm-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    alertSubject: Subject<Alert> = new Subject<Alert>();

    @Input() timeout = 3000;
    alerts: Alert[] = [];

    constructor(private AlertService: AlertService) {

        this.AlertService
            .getAlert()
            .subscribe(alert => {
                if (!alert) {
                    this.alerts = [];
                    return;
                }
                this.alerts.push(alert);
                setTimeout(() => this.removeAlert(alert), this.timeout);
            })
    }

    removeAlert(alertToRemove: Alert) {
        this.alerts = this.alerts.filter(alert => alert != alertToRemove);
    }
}