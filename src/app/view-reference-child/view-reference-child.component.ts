import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-view-reference-child',
  templateUrl: './view-reference-child.component.html',
  styleUrls: ['./view-reference-child.component.css']
})
export class ViewReferenceChildComponent implements OnDestroy {

    constructor(){
        console.log(`ViewReferenceChildComponent constructor`);
    }

    ngOnDestroy(): void {
        console.log(`ViewReferenceChildComponent ngOnDestroy`);
    }

}
