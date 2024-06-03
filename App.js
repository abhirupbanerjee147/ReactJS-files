/**
 *
 * <div id= "parent">
 *   <div id = "child">
 *      <h1>Hello I am a nested div from React"</h1>
 *      <h2>"I am learning React JS"
 *   </div>
 * </div>
 * <div id = "child">
 *      <h1>Hello Bro"</h1>
 *      <h2>"I am learning React JS from Namaste Dev"
 *   </div>
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am a nested div from React"),
    React.createElement("h2", {}, "I am learning React JS"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Bro"),
    React.createElement("h2", {}, "I am learning React JS from Namaste Dev"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "header" },
//   "Hello World from React JS"
// );

// console.log(heading); //This will return an object not a tag.

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent); //we are passing the JS object and render method takes this object and converts it into a tag and put it inside the root.
