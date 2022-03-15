
import { LoadingService } from "./loading.service";
import { Observable } from "rxjs";

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoadingType } from './loading-type';

@Component({
    selector: 'pm-loading',
    templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>;

    constructor(private loadingService: LoadingService) { };

    ngOnInit(): void {
        this.loading$ = this.loadingService
            .getLoading()
            .pipe(map(LoadingType => LoadingType.valueOf()))
    };
};
