import React from 'react';
import ReactDOM  from 'react-dom/client';

/* const secondtree = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a H2 ✨ Tag"),
    ]),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"Hello React Js"),
        React.createElement("h2",{},"I am a H2 Tag"),
    ]),
]);
*/

// React Element
const Title = function(){
    return (
        <h1>this is the normal function</h1>
    )
}
const Heading = () => (
    <h1 className='heading'>Hello Reactjs</h1>
    ); 

/* React Functional Component */
const HeadingComponent = ()=>(
    <div>
              <Heading/>
              <h1>Hello Iam a Functional Component</h1>
              <BottomNavigator/>
              <TestingComponent/>
             
              <Title/>
    </div>
);
const newComponent = () => {
    return <h4>Peace</h4>
}
const Testing = (
    <div>
    {newComponent()}
        <h4>Testing this js injection component</h4>
    </div>
)

const BottomNavigator = () => {
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

const TestingComponent = () => {
    return (
        <React.Fragment>
             {Testing}
            <h1>Hello</h1>
            <h1>multi</h1>
            <h1>checsking</h1>
            <h1>hoo</h1>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);
 