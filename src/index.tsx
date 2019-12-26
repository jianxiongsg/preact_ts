
import {render,h,Component} from "preact";
import Demo from "./components/Demo";

export function start(ele:HTMLElement){    
    render(
        <Demo data={"11113331"} />
    ,ele)
}

start(document.body)