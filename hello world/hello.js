//without JSX

ReactDOM.render(
    React.DOM.h1({
        id : "my-heading",
    },
    React.DOM.span(null,React.DOM.em(null,"hell")),
    "(span enveloped element)",
    "Hello World!"
    ),
    document.getElementById("app")
); 