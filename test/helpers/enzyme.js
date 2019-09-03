import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import jsdom from "jsdom";

const { JSDOM } = jsdom;
const dom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = dom;

global.window = window;
global.document = window.document;

Enzyme.configure({ adapter: new Adapter() });
