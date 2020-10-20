REACT:
*react is a open source library for building UI and it is  developed by FB.

*It is not a framwork.

*It is mostly used for developing UI .The other operations like routing and so on in REACT is done by using other libraries as it has a rich open source eco system.

*React has component based architecture wich makes your application into small parts which can be composed into more complex UI.

*Components also make possible to write reusable code[one artile written in React  can also be written in Angular,Vue etc with right data passing to it] .

*React is declarative[example drawing a landcsape to artist and a child].

*React will efficiently update and render  the compnents.

*Dom updates are handled gracefully in react.

PREREQUISITES:

*open the terminal  and INSTALL NODE

*Type npx i  create-react-app react-app<name of app>(this will create react application with neccessary libraries in the respective folder(react-app)).

*cd react-app and npm start(this will start react in the localhost:3000)

*open react-app folrder usind VS CODE and Remove all the files from SRC folder(so that wee can create our required app).

NOTE:

Babel dependecy is used to convert JSX in to JS which the browser can easily understand.

COMPONENTS:

*A component is part of UI

*they are reusable and can be nested with other components too.

*TWO TYPES OF COMPONENTS:

1.)STATELESS FUNCTIONAL COMPONENTS(Functional Components):

*They are just JS Functions that accepts inputs of properties(props) and returns HTML(JSX) which describes UI.

1.1)create a component folder and  create file in it named functional.js

1.2)In functional.js,create a function that returns h1 tag and import in app.js and afterr importing in app.js call that funcion as a tag  which displays as output.




ADVANTAGES:

preffered more than class component

they are simple functions

Absence of "this" keyword

2.)Class Components:

They are Es6 classes similarly like function they optionally receive an prop  and return HTML(JSX).

class component can also maintain a private internal state that is, It can maintain some information that is private to that component and use that information to describe the UI.


They are ES6 classes that extends component class from the React Libraries.

It must require the Render Method that returns the HTML.

2.1)create a file named class.js under component folder and in class.js create a class component and import it in app.js and use it as tag which displays the ouput.

ADVANTAGES:

Maintain their own Private data-STATE

they can have complex UI logic 

Provides life cycle hooks


3.)JSX:

JavaScript XML (JSX)- Extension to the JavaScript language syntax.

With react library ,its an extension to Write XML-like code for elements and components.

JSX tags have a tag name, attributes, and children.

JSX is not a necessity to write React applications.

JSX makes your react code simpler and elegant.

JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

3.1)create a file names jsx.js and in jsx.js,create a function with and without JSX and import it in app.js and call the function as a tag too see the output

JSX differences compared to regular html:

Class -> className
for -> htmlFor
camelCase property naming convention
onclick -> onClick
tabindex -> tablndex


PROPS VS STATES

Props:

props are nothing but the properties is optional inputs that component can accept and allows the component to be dyanamic

props are Immutable

Function Parameters

props get passed to the component

props-Functional components

this.props-Class components

States:

States is simply a data  that is to be displayed when the component is rendered and render is responsible for describing what the UI should look like is.The output of render method is a react element(VIRTUAl DOM) which is a plain JS object that maps to DOM Element.STATES can change its values too.

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
