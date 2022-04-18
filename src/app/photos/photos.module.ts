import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo-module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [PhotoComponent],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CommonModule,
        PhotoDetailsModule
    ],
    exports: [PhotoComponent]
})
export class PhotosModule { };
