import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'rating-star',
    moduleId: module.id,
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 200 / 10;
    }
}