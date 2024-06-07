
# React Notes



## What is React?

React is a Javascript library used to build user interface in efficient manner.

Librabry: It is a collection of pre-written codes that developers use to perform common tasks. It provides tools which we can use as and when required.
e.g. React,AJAX

Framework: It provides pre-defined structure and dictates how to organize your code, controlling overall flow of our application.
e.g. Angular

## History of React:

1. Developed by Jorden Walke
2. Initial version launched 2013
3. Maintained by meta
4. current version 18.2.0

## Why to use React ? / Pros:

1. **Composable:** Component based
2. Code reusability
3. Single page Application

## Single page application vs Multipage application

**SPA:**

1. Faster compared to MPA
2. Loads single html doc and update only particular part / component using AJAX.

**MPA:**

1. Better SEO as compared to SPA.
2. Reloads Entire document when some chnages are done.

## Creating React component:

```
<html>
    <head>
        <title> creating first react element </title>
    </head>
    <body>
        <div id='root'></div>
        <script>
            const element=React.createElement('h1',{ClassName:greet},'hello React');
            // Render the element to the DOM
            ReactDOM.render(element, document.getElementById('root'));
        </script>
    </body>
</html>
```

## JSX: Javascript XML

It is extension of JS commenly used with react which allows developers to write html code into javascript which will then transformed to JS object using tools like **Babel**.

### how to setup babel?

```
<script type='text/babel>
```

OR
install it by referning doc.

## how to use JSX?

```
jsxHeading=(
    <h1>This code is wriiten using jsx.<h1>
)
```

This is equivalent to a JS code

```
jsHeading=document.createElement('h1').textContent='This code is written using JS';
```

## React Frefments:

While writing code using JSX we can not create multiple adjucent elements, in order to create them we can enclose them inside a div or a react fragment.
i.e.

```
const jsx=(
    //wrong code
    <p>this is para</p>
    <h1>this is heading</h1>
    we can't do such a things directly so either we can enclose them inside a div or react fragment
    // corrected code
    <div>
    <p>this is para</p>
    <h1>this is heading</h1>
    </div>
    OR
    <React.Fragment>
    <p>this is para</p>
    <h1>this is heading</h1>
    </React.fragment>
    OR
    <>
    <p>this is para</p>
    <h1>this is heading</h1>
    </>
)
```

### Virtual DOM:

## DOM: Document Object Model a web API provided by js to make HTML cotents dynamic.

It creates a tree like stracture in same way we write our html code.
i.e.

```
<html>
    <head>
        <title>Dom</title>
    </head>
    <body>
        <p>This is Dom.</p>
    </body>
</html>
```

The above lines of code is converted into

```
|__Doctype :Html
|__HTML
    |__Head
    |   |__Title
    |      |_#text:Dom
    |__Body
        |__p
            |_#text:This is Dom.
```

And with the help of dom we can change that text of element in order to make dynamic content.

## DOM Manipulation:

```
            Dom Manipulation
                   |
           ________|___________
          |                    |
        Dom Update      Re-rendering
```

Here quering(Selcting elements) and dom update is simpler operation while re-rendering quite difficult if frequent re-rendering happend as it will lead to **low performance of website**.In ordern to avoid such a things , in react there is a concept called virtual dom which is nothing bust the exact replica of original dom but created inside a memory and react dosen't directly updates original dom instaed it updates virtual dom as it is present in memory and hence it will be faster.

## how virtual dom updates original dom ?=> **_Reconciliation_**

1. React creates a copy of original dom in memory call virtual dom.
2. If any changes occur react will create again a virtual dom with previous dom and reflect that changes in it.
3. react will compare previous virtual dom with newly created virtual dom and can easily update original dom without going to entire tree again and again.
4. Also original dom is updated at a particular frequency which is managed by react itself thats why it is declarative in nature.
5. as original dom will not updated frequently it will not cause any performance issue.

## Components in React

1. Functional component
2. class Based components

```
function App(){ //component name must start with a capital letter
    return (
        ....
        JSX
        ....
    )
}
//Using arrow function
const App=()=>{
    return (
        <>
        JSX
        </>
    )
}
```

### How to embed JS in JSX:

```
function App(){
    let name='sohel';
    return (
        <>
        <p>My Name is {name}</p> // '{}' this brackets used to embed js in jsx.
        </>
    )
}

```

similary a function can also be embeded as {fun()}
JSX Expression:

```
const exp=<h2>this is jsx expression</h2>
```

## NOTE:

1. String , Number and a valid expression returning value will only be rendered on screen and output will be visible on other hand undefind,null and boolean will not be rendered on screen in order to render boolean values we need to convert them into string using .toString() method.
2. Objects can not be directly rendered but its key, value can be.
3. To render array we can't use for loop in react as it will not return any value so as a alternative we are using map().

## Conditional Rendering:

1. using ternary operator
   say if we are working on a website which will show content only when user login with valid credentials so we can achieve this functionality using conditional rendering.

```
function App(){
    let loggedIn=True;
    return (
        <>
        {loggedIn?<Content>:null}//content componet will only be rendered on when loggedIn is true.
        </>
    )
}

```

2. using && operator:
   **_ in react 0," ", null, undefined, false will have false value and anything other than this will have true value_**
   && operator will return first falsy and last truthy value;
   e.g.
   ```
   let isloggedIn=true;
   <>
   {isloggedIn && welcome}// if the value of isloggedIn is true then it will check for next and again its true and its last truthy value so it will render 'welcome'.
   onother hand if isloggedIn is false it will not render anthing on screen.
   </>
   ```
3. using || operator:
   It will return last falsy and first truthy value.

## Events in JSX:

```
<button onClick={function/expression}>
//here we only have to pass refernce of a function there if we have to call it we must use inline function
<button onClick={()=>function()}>//this is only used when we have to pass any argument.
```

in react will add forms too in our website where we are frequently using two imp events such as submiting form and saving value of input onchange

1. HandleSubmit

```
function handleSubmit(e){
    e.preventDefault();//It will prevent reloading once form is submited.
    //other operations
}
```

### create-react-app tool:

we can use react in our application either by using CDN or by installing it.
but there are some drawbacks in using CDN:

1. without internet it will not load.
2. for multiple files , file ordering creates lots of conflicts.
3. weback is needed to efficiently manage files.

prerequisites for tool:

1. node js : Runtime environment
2. npm

```
npm create-react-app appname
```

it will create a basic structure of react application which has a folder structure as

```
>node_modules:it is a part of npm and all installed libraries are saved here.
>public
    >index.html : basic html doc required to create react app.
    >manifest.json: inclued metadata of app
>src all app files present inside this folder
{}package.json: Dependencies.
{}package-lock.json:detail info about installed libraries.
```

## Export:

we can export a function , object or a variable in two ways:

1. named export
2. default export

```
//named export can also be done in two ways as individual or together export
//export individually
export let a=10;
export let arr=[];
export function fun(){
    ...
}
//other way of export at bottom
let a=10;
let arr=[];
 fun=()=>{
    ...
}
export {a,arr,fun}
```

**_NOTE: entity exported using named export must be importedusing same name and in {}_**

```
//Default export
let a ='string';

export default {a};
//can be imported by any name
as import {a as str} from file_location;
```

### Styling in react

Types of styling:

1. Inline css (not preferred):

```
<div style={{height:'50px',width:'40px'}}>
</div>
```

2. Internal css

```
const styles={
    nav:{
        heigth:'50px',...
    }
}
<div style={styles.nav}>
```

3. Styles components:

```
npm install styled-components
//here we can create our own components which has html elemnt as well as our own styles.
e.g.
<div style={{height:'50px',color:'white'}}> This is div</div> **
we can replace above code by creating our own component with all styles .
i.e.
const nav=styled.div`
height:'50px',
color:'white'
`
<nav>this is div</nav> ***
both lines of code that is two star and three star are equivalent now.
```

4. css modules:
   here will write all css in one file i.e. fileName.module.css
   then will import all css from this file in our code and use it
   will write css as we write with html only in this typ of styling.
   e.g.

```
//app.module.css
.main{
    height:40px;
    width:100%;
    display:flex;
}
.para{
    text-align:center;
    font-size:bold;
}
a{
    text-decoration:none;
}
```

```
//app.js
import styles from './app.module.css';
function App(){
    return (
        <>
        <div ClassName={styles.main}>
            <p ClassName={styles.para}>This is module css</p>
            <a href='https://www.google.com'>Go to Google</a>
        <div/>
        </>
    )
}

```

### Class Based Component:

Syntax:

```
import react from 'react';
class App extends react.Component{
    render(){
        return(
            JSX
        )
    }
}
```

## state in class based components:

class based components can have their own states which is nothing but an object that determines how the component behaves and rendered.

```
class App extends react.Component{
    constructor(props){
        super(props);
        this.state={
            count:0;
        }
    }
    increment=()=>{
        this.setState({
            count:this.state+1;
        })
        or
        this.setstate((pre)=>{
            return{
                count:prev.count+1;
            }
        })
    }
    render(){
        return (
            <>
            <h1>Count:{this.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
}
```

## props in class based components:

props are used to pass data from parent to child only and props are immutable.

```
class ParentComponent extends Component {
  render() {
    return (
      <ChildComponent message="Hello from Parent" />//we can pass multiple props as well
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

```

### Component Life cycle methods:

Component life cycle can be defined as series of stages through which component passses from the begining of its life(Component inserted into DOM) until its death (Removed from DOM).
phases of Lifecycle methods:

```
MOUNTING ------> UPDATING ------> UNMOUNTING ------> ERROR HANDLING
```

SideEffects: Actions performed with outside world.
e.g. Fetching data using API

**_1. Mounting phase:_**

- constructor(): used to initialized states and bind event handlers. **_NO side effetcs allowed , NO setstate_**
- render(): must be used, it will render the component. **_NO side effetcs allowed , NO setstate_**
- componentDidMount(): It is used to do some actions when component is mounted. **_Side Effects allowed , setState also allowed_**
- getDerivedStateByProps()

Order of lifecycle methods:

```
constructor() -----> getDerivedStateByProps() -----> render() -----> componentDidMount()
```

**_2. Updating phase:_**

- componentDidUpdate() : It will run once component is updated, here **_Side effects and setstate allowed_**

**_3. Unmounting phase:_**

- componentWillUnmount(): It will run once component is removed from DOM. **_Side effects and setstate allowed_**

```
import React, { Component } from "react";

export default class component extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    <!-- increaseCount = () => {
      this.setState({
        count: this.state.count,
      });
    }; -->
  }
  componentDidMount() {
    console.log("componentDidMount:Component");
  }
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.count !== this.props.count) {
      this.setState(() => {
        return {
          count: prevprops.count + 1,
        };
      });
      console.log("componentDidUpdate:Component updated");
    }
  }
  render() {
    return (
      <>
        <h1>{this.count}</h1>
        <button>Increase</button>
      </>
    );
  }
}

```

## Limitations of class based components:

1. Hard to use stateful logic between components.
2. Complex component become difficult to understand.
3. Classes can be confusing at a time.

### so will mostly use functional components in our React Application.But like classes in function will not able to use a constructor or another life cycle component methods that why we are using HOOKS in functional components.

### Hooks:

Hooks are functions that lets you Hook into react state and life cycle methods from functional component.

1. useState(): used to create state variables.
   e.g.

```
const [name,setname]=useState(initialState);
const [isLoggedIn,setisLoggedIn]=useState(false);
<!-- the value can only be altered or assigned using setisLoggedIn.
i.e. setisLoggedIn(!isLoggedIn); -->
```

2. useEffect(): side effects can be performed here

   syntax:

```
useEffect(setup(),[dependencies]);
```

```
<!-- equivalent to componentDidMount() -->
useEffect(()=>{
    console.log('Compent is mounted');// only initial render
},[])
```

```
<!-- equivalent to componentDidUpdate() -->
const [name,setname]=useState('');
useEffect(()=>{
    console.log('Compent is updated');
},[name]);//component will update as name updates.
```

```
<!-- equivalent to componentWillUnmount() -->
useEffect(()=>{
    return {
    console.log('Compent is unmounted');//it will work when a component is unmounted from dom.
    }

},[])
```

3. useRef(): It is a react hook which is used to create mutable reference to a dom elemrnt or value.

e.g.

```
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;

```

### Context API

```
            parentComponent
                /       \
            child1Com   child2Com
              /  \
        child3  child4Com
        Com
```

In react props are used to pass data from parent component to child component.consider above example
case1: say we have created State in child2Com and we need to use this props in child1Com as the are sibling to each other we can't directly yse props here to make it possible we need to move State from child2Com to parentComponent then only we can use it .
case2: we have to use props in child4Com and State is present in parentComponent so props un-necessarily passing through child1Com this is small component so it will not create a big issue but if we are having 100s of components in that case it will surely create problems and this problem is known as **Prop Drilling**.
In order to avoid prop drilling react developers introduced a concept called Context API.
Contect API helps developer to manage outside which will avoid props drilling.

## implementation of Context API:

```
create a context -----> provide a context -----> consume a context
```

1. Create a context:

```
>src>context>myContext.js
import react,{createContext} from 'react';
export const myContext=createContext();
```

2. Provide a context:

```
import React from 'react';
import {myContext} from './myContext';
const NameState=(props)=>{
const state={
    name:'sohel',
    age:23
}
return (
    <myContext.Provider value={state}>
    {props.children}
    </myContext.Provider>
)
}
export default NameState;
```

```
//app.js
import NameContext
return(
    <>
    <NameContext>
    <Home />
    <About />
    </NameContext>
    </>
)
```

3. Consume Context

```
import React,{useContext} from 'react';
import myContext from './'

export default function About() {
    const {name,age}=useContext('myContext')
  return (
    <div>Hello, my name is {name} and i am {age} years old.</div>
    <!-- o/p: Hello, my name is sohel and i am 23 years old. -->
  )
}

```

### Rect Router:

Routing: moving from one page to another

```
                        Routing
       ____________________|_______________________
      |                                            |
    server side routing (MPA)              Client side routing(SPA)
```

In react will use third part library for routing **React-router-dom**.
Creating Routes:

```
//app.js
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

export default function App(){
const route=createBrowserRouter([
   { path:'/',
    element:<Navbar />,
    children:[
       { path:'/',
        element: <Home />},
        {path:'/about',
        element:'<About />
        }
    ]}
])
return (
    <>
    <RouterProvider.route={route} />
    </>
)
}
```

i have written code for nested routing where navbar is a parent component which will present on all other components.
but in order to use display all children inside parent element we need to use `<Outlet />` at the end of parent component.
**_ Note: we can not make use of `<a>` in react as it will refresh the page and all states will be reset to initial state so will use alternative to it as `<Link` or `<NavLink>` or `useNavigate()`_**

```
<Link to={'/'}>Go to home </Link>
```

```
<NavLink to={'/'} style={({isActive})=>(isActive ?{color:'red':undefined})}>Go to home </NavLink>
//when we have to add some styling after page visited we can use it.
```

```
//we can use it to navigate with any side effects e.g. navigate to home after 3 sec after successfull login
import {useNavigate} from 'react'
const navigate=useNavigate();
useEffect(()=>{
    if(loggedIn){
    setTimeOut(()=>{
        navigate('/')
    },3000)}
},[])

```

## Error Route

if we go to unhandeled route it will show some error messages which we can customize as per our need using `errorElement`
e.g.

```
const route=createBrowserRouter([
   { path:'/',
    element:<Navbar />,
    errorElement:<Err />
   }
])
```

## Dynamic Routing:

```
{
    path:'items/:id', element: <Item />
}
<!-- and to use this id we need to use useParams() hook
i.e.
const {id}=useParams() -->

```

## Protected Routes:

```
const ProtectedRoute=({children})=>{
    if(!loggedIn){
        return to loggedIn page
    }else{
        return children
    }
}
```

## Redux

Redux: It is a state managment library.
In context API we learned what is props drilling and to avoid it we are using Context Api, but there are some limitations of context API as well:

1. Design for static content
2. overuse will lead to performance issue.
3. Difficult to debug.
4. Scalability issue.
   **_Context API's are prefered for small scale Applications._**

## currying and closures:

- curring: It is a technique in which a function with multiple arguments is transformed to a multpile inner functions with single argument.

```
funcion sum(a,b,c){
    return a+b+c;
}
<!-- This function transformed to following function: -->
function sumcurred(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
```

- Closure: Inner functions can access scope/ properties/variables of parent function even after it has been executed.

## How Redux works?

```
                            Actions ------> Reducers ------> Store
                            ^     ^                             /
                             \     \                           /
                              \     \                         /
                Dispatcher     \     \                       / Selectors
                                \     \                     /
                                 \     \                   /
                                  \     \                 /
                ComponentA-------->      <---ComponentB<--
```

In above figure we can see the unidirectional flow known as `Flux Architecture`.

1. Component will dispatch actions with the help of dispatcher.
2. Actions will comunicate with Reducer.
3. Reducer is reponsilbe for altering states and are `Pure Functions`.
4. Store contains all data to be shared.
5. with the help of Selectors we can access data from store.

### Redux with react:

1. installation

```
npm install react-redux
```

2. Setting up actions:

```
>src>redux>Actions>todo.js
//creating action constants
const ADD_TODO=' ADD TODO';
CONST TOOGLE_TODO="TOOGLE TODO";
//creating action creators
const AddTodo=(text)=>({text,type:ADD_TODO});
const ToggleTodo=(index)=>({index,type:TOOGLE_TODO});
```

3. setting up reducers:

```
>src>redux>Reducers>todoReducer.js
const initialState={
    todo:[];
}
function todoReducer(state=initialState,action){
    // state update functions
}
export const todoReducer;
```

4. setting up Store:

```
>src>redux>store>store.js
import todoReducer
export store=redux.createStore(todoReducer);
```

5. providing store:

```
import {Provider} from 'rect-redux';
import {store}
<Provider store={store}>
................</Provider>
```

6. Using selector:

```
import {useSelector} from 'react-redux';
const todos=useSelector((state)=>state.todos)
```

7. Dispatcing actions and payloads:
   Using `useDispatch()`
8. combining Reducers:

```
import {combineReducer} from 'redux';
const result=combineReducer({
    todo:todoReducer,
    notes:noteReducer
});
```

**_One of the challenge with redux is that code is difficult to debug and test as we need to write huge amount of code to implement redux so to overcome this challange we are using redux-toolkit._**

1. Installation:

```
npm i @reduxjs/toolkit
```

2. creating reducer using react-toolkit:

```
import {createSlice} from '@reduxjs/toolkit';
const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todo:[]
    },
    reducers:{
        add:(state,actions)=>{
            state.todos.push({
                text:action.payload,
                completed:false
            })
        }
    }
});
export const todoReducer=todoSlice.reducer;
export addAction=todoSlice.actions.add;
export const data=(state)=>todoReducer.state.todo;
```

3. using actions and selectors:

```
import {useDispatch}
import {useSelector}
import {addAction}
import {data}

const Data=useSelector(data);
console.log(Data);
const dispatch=useDispatch();
return(
    <>
    <button onClick=dispatch(addAction('text'))>
    </>
)
```

## creating react app with redux template

```
npm create-react-app myapp --template redux
```

## Extra reducers:

Extra Reducers allows to share/invoke action from other reducers.

```
const notificationSlice=createSlice(
    {
        name:'notification',
        initialState,
        reducer:{},
        extraReducers:{
            'todo/add':(state,action){
                state.message='to do added'; // it will update state of notification reducer once add action dispatched.
            }
        }
    }
)
```

### Advance Redux:

Loggers play important role in debugging errors.but it is quite difficult to add loggers manually at every place.So will use `MiddleWares`.

- MiddleWare:
  this are interceptors which will

1. Recieve Data
2. perform operations and
3. pass data to next middleware.

```
const loggerMiddleware=(store)=>{
    return function(next){
        return function (action){
            console.log(action.type);
            next(action);
            console.log(store.getState());

        }
    }
}

//inside store.js
middleware:[loggerMiddleware];
```

## side effects and async code inreact:

we can't directly make aschnchronous calls inside reducers as they are `Pure functions`.
In order to use side effects in reducers will make use of `createAyncThunk`.

```
<!-- how to use fetch -->
fetch('url').then(res=>res.JSON()).then(data=>{
    console.log(data);
})

<!-- How to use axios -->
axios('url').then(res=>{
    console.log(res.data);
})
```

## createAsynchThunk():

```
import { createAsyncThunk } from '@reduxjs/toolkit';

const asyncThunkName = createAsyncThunk(
  'sliceName/actionName', // action type
  async (payload, thunkAPI) => {
    // async logic here
    // typically involves API calls or other side effects
    const response = await someAsyncFunction(payload);
    return response.data;
  }
);
```

e.g.

```
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById', // action type
  async (userId, thunkAPI) => {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // regular reducers (optional)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;

```
