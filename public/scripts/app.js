console.log('App is running ');

var template = React.createElement(
    "p",
    null,
    "This is jsx from app.js"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
