import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo-module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule
    ]
})

export class PhotoFormModule { }
