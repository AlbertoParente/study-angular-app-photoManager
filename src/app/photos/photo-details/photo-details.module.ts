import { NgModule } from "@angular/core";
import { PhotoDetailComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";

NgModule({
    declarations: [PhotoDetailComponent],
    exports: [PhotoDetailComponent],
    imports: [CommonModule]
})
export class PhotoDetailsModule { }
