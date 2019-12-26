
import {render,h,Component} from "preact";
import Demo from "./components/Demo";

export function start(ele:HTMLElement){    
    render(
        <Demo data={"11113331"} />
    ,ele)
}
console.log(1111111)
start(document.body)