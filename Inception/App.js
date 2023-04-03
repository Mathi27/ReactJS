/* const heading = React.createElement("h1",{
    id:"heading",
},"Learning React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */

// Nested React Structure.
/* 
    <div id="parent">
       <div id="child">
           <h1>I am a H1 Tag</h1>
       </div>
    </div>
*/

       /* const parent = React.createElement("div",{id:"parent"},
         React.createElement("div",{id:"child"},
         React.createElement("h1",{},"I am a h1 tag")));

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent); */

// If we want to create siblings , we should pass inside array

/* 
 <div id="parent">
       <div id="child">
           <h1>I am a H1 Tag</h1>
           <h2>I am a H2 Tag</h2>
       </div>
       <div id="child2">
           <h1>I am a H1 Tag</h1>
           <h2>I am a H2 Tag</h2>
       </div>
    </div>
*/

const secondtree = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a H2 Tag"),
    ]),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a H2 Tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(secondtree);