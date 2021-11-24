import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo-module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './photos/search/search.component';
import { DarkenOnHouverModule } from 'src/app/shared/components/directives/darken-on-houver/darken-on-houver.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHouverModule
    ]
})

export class PhotoListModule { }
