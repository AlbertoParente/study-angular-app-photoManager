import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo-detail.component.html',
})
export class PhotoDetailsComponent implements OnInit {

    photo: Photo;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        this.photoService
            .findById(id)
            .subscribe(photo => this.photo = photo);
    }
}
