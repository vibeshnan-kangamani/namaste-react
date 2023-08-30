const parent = React.createElement("div",
        { id: "parent"},
        React.createElement("div",{ id: "child" }, [React.createElement("h1",{ id: "childh1" }, "1st H1 Tag"),
                                                    React.createElement("h1",{ id: "childh2" },"2nd H1 Tag" )] ));
        const heading = React.createElement("h1",{}, "Hello world! this is VIBI"); // returns an Object
        const root = ReactDOM.createRoot(document.getElementById("root"));

        console.log("root",root);
        console.log("heading",heading);
        console.log("parent",parent);
        root.render(parent);
