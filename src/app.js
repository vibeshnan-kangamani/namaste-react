import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// EP-1 Inception
// const parent = React.createElement("div",
//         { id: "parent"},
//         React.createElement("div",{ id: "child" }, [React.createElement("h1",{ id: "childh1" }, "1st H1 Tag"),
//                                                     React.createElement("h1",{ id: "childh2" },"2nd H1 Tag" )] ));
//         const heading = React.createElement("h1",{}, "Hello world! this is VIBI"); // returns an Object
//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         console.log("root",root);
//         console.log("heading",heading);
//         console.log("parent",parent);
//         root.render(parent);

// EP-3 s
// Laying the foundation 

// way of creating a element using core REACT
// const heading = React.createElement("h1", { id: "heading1" } , "Namste React 🚀");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // way of creating a element using JSX
// // this JSX code is transpiled to JS before it goes to browser
// // parcel gave this work to babel and babel does the transpilation, so that the browser can understand 
// const jsxHeading = <h1 id="heading" className="vibe"> Namaste React Using JSX  🚀</h1>;

// // Title Component 
// const TitleComponent = () => <h1 id="heading" className="vibe"> Namaste React Using JSX  🚀</h1>;

// // React Component - 2 Types - 1. class based component(old way) , 2. Funtional Component(New Way)  

// const number = 1000;
// // Functional Component
// const HeadingComponent  = () => (
//         <div id="container">
//                 {jsxHeading}
//                 <TitleComponent />
//                 <h1>This one is a React funtional component</h1>
//         </div>
// );

// // JSX => React.createElement => ReactElement-JS Object => HtmlElement(render)
// console.log(jsxHeading);
// console.log(HeadingComponent);
// // root.render(jsxHeading);  // - Rendering an element
// root.render(<HeadingComponent />);

// ? Food Delivery APP 

const Grocery = lazy(() => import("./components/Grocery"));
const AboutComponent = lazy(() => import("./components/About"));
const ContactComponent = lazy(() => import("./components/Contact"));

// todo ************** Layout Component  ***********************
const AppLayoutComponent = () => {
        return (
                <div className="app">
                        <HeaderComponent /> 
                        <Outlet></Outlet>
                </div>
        )       
};


// todo ******************** Routing Configuration ************
const appRoute = createBrowserRouter([
    { path: "/", element: <AppLayoutComponent />, errorElement: <ErrorComponent />,children: [
        { path: "/", element: <BodyComponent />},
        { path: "/about", element: <Suspense fallback={<h1>Fallback display of About</h1>}><AboutComponent /></Suspense>},
        { path: "/contact", element: <Suspense fallback={<h1>Fallback display of Contact</h1>}><ContactComponent /></Suspense>},
        { path: "/grocery", element: <Suspense fallback={<h1>Fallback display of Grocery</h1>}><Grocery /></Suspense>},
        { path: "/restaurant-menu/:resId", element: <RestaurantMenu />}
    ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= {appRoute} />);