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
For an example if you want to add an element at the beginning of the list you cant add as the first element because it will be replaced by the previous item and the new element will againn be added at last though the index value of the first element will be changed to the index value of the new element.

styles-refer stylesheet.js and stylesheet.css

Lifecycle Methods in Class:
when we create a component it goes under several stages in their lifecycle.React provides built-in methods which we can override in certain stages of lifecycle.

1.)Mounting:[mount.js,childMount.js]

when an instance of a component is being created and inserted into the dom.

methods of mounting:

constructor,static getDerivedStateFromProps,render and componentDidMount

CONSTRUCTOR:

A special function that wil get called whenever a new component is created

USED FOR: initializing a state and binding the event handlers

Not To DO in Constructor:
It should not have side effects example:
you should never make a HTTP requests inside a constructor

static getDerivedStateFromProps:

when the state of the component depends on the changes in props over time you can use this method to set the State.

It is static method that recives props and states as parameter and returns null or object of that represents the updated state of a component

this method is called everytime when the component is re-rendered

since this method is a static method you cant use this.setState within this method.

Not To DO in static getDerivedStateFromProps:
It should not have side effects example:
you should never make a HTTP requests inside a constructor

RENDER:

It is the must required method in class component

It reads props and state and return the JSX

Not To DO in Render:
Do not change the state or interact with dom or make ajax calls

componentDidMount:

It is invoked after a component and all its children components have been rendered to the dom.

It is the perfect place to cause side effects that is making aajax calls to load data or interact with DOM

2.)Updating:[mount.js,childMount.js]

when a component is be re-rendered as a result of changes to either its props or state

methods of updating:

static getDerivedStateFromProps,render,shouldComponentUpdate,componentDidUpdate and getSnapShotBeforeUpdate.

shouldComponentUpdate:

It receives the updated props and states.

By default all the components are re-rendered whwnver a change occurs in props/states. To prevent this default rerendering we use this method by returning false.

It compares the previous prop/states with next props/states and returns true or false by which the re-rendering can be prevented.

It is used for performance optimization

It is rarely used.

Not To DO in shouldComponentUpdate:
It should not have side effects example:
you should never make a HTTP requests inside a constructor

getSnapShotBeforeUpdate:
It receives the provProps/prevStates as parameter.

It is called right before the changes from the virtual Dom are to be reflected in the actual Dom

It is rarely used

It is used to capture some informnation from the DOM for an example.you can read scroll position and maintain itgs position even after th rerender of the component

This method returns null or a value.This returned value is used as third parameter in
componentDidUpdate method.

componentDidUpdate:
This method is called after the render is finished in the re-render cycles.Which ensures that all components are rendered properly after the update in props/states.

It is called only once for each re-render cycle which allows us to have side effects that is we canmake ajax call but make sure you compare the prevprops with updatedprops so that we can avoid unwanted ajax calls.

It recieves prevProps,prevState,snapshotValue as parameters.

3.)Unmounting:

when a component is being removed from the dom

methods of Unmounting:

componentwillUnmount:

this method is invoked immediately before a component is unmounted and destroyed.

It helps in cancelling the network requests,removing event handlers,cancelling any subscriptions and also invalidating timers

DO not use SetState method as the compnent will never re-render after it is unmounted

4.)Error Handling:[EB]

When there is an error during rendering,in a lifecycle method, or in the constructor of any child components.

ErrorBoundary:
Error Boundary are React components that catch JS error in their child component tree,log those errors and display a full-back UI.

A class component that implements either one or both of the lifecycle methods static getDerivedStateFromError and componentDidCatch becomes an error boundary

The placement of EB also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.

methods of Error Handling:

static getDerivedStateFromError and componentDidCatch

static getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch is used to log the error Informations.

PureComponents And Memo:

A regular component does not implement the shouldComponentUPdate Method.it always returns true by default

A pureCompnent implements shouldComponentUpdate with a shallow props and state comparisons.

the component is only re-rendered when the shallow comparison of prevprops/prevstates is equal to the current states/props

purecomponents prevents unnecessary rerenderings

Note:

\*if parent component is not rerendered then child components are not rerendered.

\*you should not mutate object/array in props/states for an example if you need to add in item in an array dont mutate it by pushing it into the array.the reference to the array doesnt change and because purecomponents checks only the reference the component will not be re-rendered even if there is a change.

\*It is good idea to ensure that all the childComponents are also pure components

shallow comparisons:
primitive types:
if var "a" and "b" has the same value and type then shallow comparison returns true
Complex types:[objects,arrays]
let a=[1,2]
let b=[1,2]
let c=a

let re1=(a===b)//returns false as it does not reference the same object

let re2=(a===c)//returns true

MEMO:
syntax:React.memo(functional_component_name)
to acheive pure components features in functional compnents we use memo.

REFs:[ref.js]
It allows us to access the DOM-Nodes in directly.

To know how the childComponent methods are called in parent component refer INputREf folder

PORTALS:[Portal.js]
portals allow us to render children-components outside the dom of parentComponent

USES:
It helps in dealing with CSS of the parent component when the Childcomponent is a model/popup/tooltip.

Even the portals can be anywhere in the domNode,It behaves like normal ReactChild component by which enables EventBubbling .

Higher Order Components[HOC]:

Hoc helps in sharing common functionalities beween the components without duplicating the code.If you have same parent component the fucntionalities can be shared by moving the states to parent component and pass it is as props to the child components but it cant be achieved when the childComoponents have different parent Component thats where the HOC solve the problem.

Hoc takes a component as argument and returns a new component

The Hoc shares different states to the components so the change in states of one component doesnt affect the other component

Context:

Context provides a way to pas the data through the component tree without having to pass props down manually at every level.

steps:
1.)create the context
2.)proide context value
3.)consume the context value

Limitations of Context-type sharing data:

1.)It works only in class comopnents

2.)if you want share more than once conrtext value you need use consumer components instead of contxt-type.

HOOKS:
Hooks are new feature addition in React which allow you to use React features without having to write in a class

Hooks doesnt work inside a class

Hooks avoids the confusion with "this" keyword

Hooks allow you to reuse statefull logic without changing the component hierarchy.You can avoid advance react patterns to a great extent which makes code much simpler to follow.

Hooks organize the logic inside the component into reusable units that is the related code can be put together which will avoid the bugs.

Rules of Hooks:

Dont call hooks inside loops,conditions or nested functions

call them from within React Funcitonal Component and not just any regular functions

USESTATE:
this hook lets you addd the state to functional components

In classes, the stateis always an object

with the useState hook,the state doesnt have to be an object

the useState returns an array with 2 elements.The first one is the current value of the state and the second one is the setter function that change the state.

when new state deponds on the previous state you can pass a fucntion with prevState as parameter to the setter funtion which can change the state based on previous state value.

when dealing with objects or arrays, always make sure to spread your state varaible and then call the setter funciton.

USE EFFECT:

This Hook lets your perform side Effects in functional components

useEffect runs after first render and also after every update of the components

It is a close replacements for componentDidMount,componentdidUpdate and componentWillUnmount.

In class component the side Effects are performed with componentDidMount,componentdidUpdate and componentWillUnmount lifcycle methods.

In class ,the code is repeated for doing the same work and the unrelated code are grouped which is solved by useEffect hooks
//componentDidMount will be executed only once in the component lifecycle
componentDidMount(){
document.title=`clicked ${this.state.count}times`
this.interval=setInterval(this.tick,1000)
}
//to update based on the button clicked we use componentDidUpdate.componentDidUpdate is called anytime the component updates

componentDidUpdate(){
document.title=`clicked ${this.state.count}times`
}

//we can clear the interval the component is removed from the dom.
componentWillUnMount(){
clear(this.interval))
}

USEREDUCERS:

useReducer is a hook that is used for state managment in React

It is an alternative to useState

useState is built using useReducers

useReducers is related to reducer functions in JS

reducer(currentState,action)
useReducer(reducer(a-function),initialState)

Reducers in JS VS useReducers

1.)a-]array.reduce(reducer(a function),initialvalue)

b-]useReducer(reducer(a-function),initialState)

2.)a-]It returns as

singleValue=reducer(accumulator,itemValue)

b-]It returns as

newState=reducer(currentState,action)

3.) a-]reduce method returns as single value
b-]useReducer returns as pair of values,[newstate,dispatch]
