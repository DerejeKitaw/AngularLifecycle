# AngularLifecycle

[Source](https://angular.io/guide/lifecycle-hooks)
A component has a lifecycle managed by Angular.

## Angular 
    creates component, 
    renders component, 
    creates and renders components children, 
    checks component when components data-bound properties change, and 
    destroys component before removing component from the DOM.

Developers can tap into key moments in that `lifecycle` by implementing one or more of the lifecycle hook interfaces in the Angular core library.

Each interface has a single hook method whose name is the interface name prefixed with `ng`. 

    For example, the OnInit interface has a hook method named ngOnInit()

No directive or component `will implement all of the lifecycle hooks` and some of the hooks only make sense for components. 

    Angular only calls a directive/component hook method if it is defined.

