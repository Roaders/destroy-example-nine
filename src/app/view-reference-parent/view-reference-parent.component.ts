import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { ViewReferenceChildComponent } from '../view-reference-child/view-reference-child.component';

@Component({
    selector: 'app-view-reference-parent',
    template: ''
})
export class ViewReferenceParentComponent implements OnInit {

    private static componentRef: ComponentRef<ViewReferenceChildComponent> | undefined;

    constructor(private viewContainerRef: ViewContainerRef, factory: ComponentFactoryResolver, injector: Injector) {
        if (ViewReferenceParentComponent.componentRef == null){
            ViewReferenceParentComponent.componentRef = factory.resolveComponentFactory(ViewReferenceChildComponent).create(injector);
        }
    }

    ngOnInit(): void {
        this.viewContainerRef.insert(ViewReferenceParentComponent.componentRef.hostView);
    }

}
