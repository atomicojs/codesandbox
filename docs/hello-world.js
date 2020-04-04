import { c as customElement, a as createElement } from './chunks/fc508d69.js';

var style = ":host {\r\n  font-size: 30px;\r\n}\r\n";

const HelloWorld = ({
  message
}) => createElement("host", {
  shadowDom: true
}, createElement("style", null, style), createElement("h1", null, "\uD83D\uDC4B ", message));

HelloWorld.props = {
  message: {
    type: String,
    value: "hello-world",
    reflect: true,
    event: {
      type: "changeMessage"
    }
  }
};
var helloWorld = customElement("hello-world", HelloWorld);

export default helloWorld;
//# sourceMappingURL=hello-world.js.map
