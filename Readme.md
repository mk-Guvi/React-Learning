JSX:

JavaScript XML (JSX)- Extension to the JavaScript language syntax.

Write XML-like code for elements and components.

JSX tags have a tag name, attributes, and children.

JSX is not a necessity to write React applications.

JSX makes your react code simpler and elegant.

JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

JSX differences:

Class -> className
for -> htmlFor
camelCase property naming convention
onclick -> onClick
tabindex -> tablndex

Functional Components:
They are just JS Functions that accepts inputs and returns HTML(JSX) which describes UI.

        ADVANTAGES:
            Absence of "this" keyword

Class Components:
They are ES6 classes that extends component class from the React Libraries.
It must require the Render Method that returns the HTML.
ADVANTAGES:
Maintain their own Private data-STATE
Provides life cycle hooks

PROPS VS STATES

Props:

props are nothing but the properties is optional inputs that component can accept and allows the component to be dyanamic

props are Immutable

Function Parameters

props get passed to the component

props-Functional components

this.props-Class components

States:

States is simply a data that component maintains,it can change its values too.

States are Mutable(changed)

variables decalred in function body

state is managed within the component

useStateHook- Functional Component

this.state-class Component

Remember while using SetState:

To change state "setstate" has to be used.

Always make use of SetStates and never modify the state directly.

code that has to be executed after the state has been updated, then place that code in the call back function which is the second argument to the setstate method.

when you have to update state based on previous state value,pass in a function as argument of the regular object.

Event Handler Bindings Methods:

1(refer EventBinding file):This Method every update to the state will cause component to rerender this inturn will generate a new eventhandler for every renders ...for small apps,the performance will not be affected but it is vice versa for big apps and for the components that contain nested child components.

2:Arrow Function(refer EventBinding file):It is similar to the previous method that has some performance simplifications in some scenerios .

3:Binding Event handlers In Constructor(refer EventBinding file).

4:Arrow Function As Class Property(refer EventBinding file):Not yet Released in React.Under Development.

To Know How Methods of Parent Component is accessed from Child Component check out the files "ParentComponent.js" and "ChildComponent.js".

To know conditional rendering check out the file "Conditional.js".

To know ListRendering check out Files "List.js" and "Person.js"
