REACT:

\*react is a open source library for building UI and it is developed by FB.

\*It is not a framework.

\*It is mostly used for developing UI .The other operations like routing and so on in REACT is done by using other libraries as it has a rich open source eco system.

\*React has component based architecture which makes your application into small parts.

\*Components also make possible to write reusable code[one article written in React can also be written in Angular,Vue etc with right data passing to it] .

\*React is declarative[we just need to tell react what we want and react with its reactDom will build the actual UI for an example drawing a landcsape to artist[just tell them what to draw but not how which indicates declarative] and a child[you have to describe both how and what to draw]].

\*React will efficiently update and render the compnents.

\*Dom updates are handled gracefully in react.

\*React can be Intregated to any of your applications.

PREREQUISITES:

\*open the terminal and INSTALL NODE

\*Type npx i create-react-app react-app<name of app>(this will create react application with neccessary libraries in the respective folder(react-app)).

NOte :
npx is npm paackage runner which is installed along the node.

npx take care of running create-react-app(CLI-tool) without installing it globally.

\*cd react-app and npm start(this will start react in the localhost:3000)

\*open react-app folrder usind VS CODE and Remove all the files from SRC folder(so that we can create our required app).

NOTE:
Babel dependecy is used to convert JSX in to JS which the browser can easily understand.

Webpack is used to bind all the dependencies

package.lock.json ensures that the consistent installation of dependencies.

node_modules is the where all the dependencies are installed.

Functional Components:

They are just JS Functions that accepts inputs pf properties(props) and returns HTML(JSX) which describes UI.

example:

const welcome=(props)=>{
return <h1>hello,{props.name}</h1>
}

        ADVANTAGES:
            Absence of "this" keyword

Class Components:

They are ES6 classes that extends component class from the React Libraries.

It must require the Render Method and can also get the props and returns the HTML(JSX).

It can maintain a private internal state(any data) which is private to the respective component that be used to describe the UI.

class welcome extends React.Component{
render(){
return<h1>hello,{this.props.name}</h1>
}
}

ADVANTAGES:

Maintain their own Private data-STATE
Provides life cycle hooks

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

PROPS VS STATES

Props:

props are nothing but the properties is optional inputs that component can accept and allows the component to be dyanamic.

props are Immutable

Function Parameters

props get passed to the component

props-Functional components

this.props(reservered in class components)-Class components

States:

States is simply a data that is to be displayed when the component is rendered and render is responsible for describing what the UI should look like is.The output of render method is a react element(VIRTUAl DOM) which is a plain JS object that maps to DOM Element.STATES can change its values too.

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

Destructuring props:

functional component
const fun=({prop1})=>{
return <h1>{prop1}</h1>
}
class component:
const {prop1}=this.props
const {state1=this.state

Event Handler Bindings Methods:

1(refer EventBinding file):This Method every update to the state will cause component to rerender this inturn will generate a new eventhandler for every renders ...for small apps,the performance will not be affected but it is vice versa for big apps and for the components that contain nested child components.

2:Arrow Function(refer EventBinding file):It is similar to the previous method that has some performance simplifications in some scenerios .

3:Binding Event handlers In Constructor(refer EventBinding file).

4:Arrow Function As Class Property(refer EventBinding file):Not yet Released in React.Under Development.

To Know How Methods of Parent Component is accessed from Child Component check out the files "ParentComponent.js" and "ChildComponent.js".

To know conditional rendering check out the file "Conditional.js".

To know ListRendering check out Files "List.js" and "Person.js"

Note:
Using index of map function m=as key in lists may affect in certain operations like sorting ,adding elements in the required position as react uses key to identify the items in lists.
For an example if you want to add an element at the beginning of the list you cant add as the first element will be replaced by the previous item and the new element will agian be added at last thought the index value of the first element will be changed to he index value of the new element.
