import { NgModule } from '@angular/core'
import { headerComponent } from './header/header.component';

@NgModule({
    declarations: [headerComponent],
    exports: [headerComponent]
})
export class CoreModule { }
