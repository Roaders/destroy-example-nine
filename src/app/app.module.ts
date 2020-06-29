import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewReferenceParentComponent } from './view-reference-parent/view-reference-parent.component';
import { ViewReferenceChildComponent } from './view-reference-child/view-reference-child.component';

@NgModule({
    declarations: [
        AppComponent,
        ViewReferenceParentComponent,
        ViewReferenceChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
