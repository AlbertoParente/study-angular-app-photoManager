import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoOwnerOnlyDirective } from './photo-owner-only.directive';

describe('PhotoOwnerOnlyDirective', () => {
    let component: PhotoOwnerOnlyDirective;
    let fixture: ComponentFixture<PhotoOwnerOnlyDirective>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhotoOwnerOnlyDirective]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotoOwnerOnlyDirective);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
