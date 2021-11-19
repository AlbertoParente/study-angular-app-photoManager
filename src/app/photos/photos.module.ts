import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoModule } from './photo/photo-module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormComponent,
        PhotoListComponent,
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {
}
