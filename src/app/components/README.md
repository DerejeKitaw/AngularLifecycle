Component	Description
Peek-a-boo	
Demonstrates every lifecycle hook. Each hook method writes to the on-screen log.
Spy	
Directives have lifecycle hooks too. A SpyDirective can log when the element it spies upon is created or destroyed using the ngOnInit and ngOnDestroy hooks.
This example applies the SpyDirective to a <div> in an ngFor hero repeater managed by the parent SpyComponent.
OnChanges	
See how Angular calls the ngOnChanges() hook with a changes object every time one of the component input properties changes. Shows how to interpret the changes object.
DoCheck	
Implements an ngDoCheck() method with custom change detection. See how often Angular calls this hook and watch it post changes to a log.
AfterView	
Shows what Angular means by a view. Demonstrates the ngAfterViewInit and ngAfterViewChecked hooks.
AfterContent	
Shows how to project external content into a component and how to distinguish projected content from a component's view children. Demonstrates the ngAfterContentInit and ngAfterContentChecked hooks.
Counter	
Demonstrates a combination of a component and a directive each with its own hooks.
In this example, a CounterComponent logs a change (via ngOnChanges) every time the parent component increments its input counter property. Meanwhile, the SpyDirective from the previous example is applied to the CounterComponent log where it watches log entries being created and destroyed.