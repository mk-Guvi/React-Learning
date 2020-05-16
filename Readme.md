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

States are Mutable(changed)

variables decalred in function body

state is managed within the component

useStateHook- Functional Component

this.state-class Component

Remember while using SetState:

anyother time to change state setstate has to be used

Always  make use of SetStates and never modify the state directly

code has to be executed after the state has been updated then place that code in the call back function which is the second argument to the setstate metho

when you have to update state based on previous state value,pass in a function  as argument of the regular object

