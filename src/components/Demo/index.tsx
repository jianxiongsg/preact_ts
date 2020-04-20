import {h,Component,render} from "preact";
import "./index.less";
interface PropsInfo{
    data:string
}
interface StateInfo{

}

export default class Demo extends Component<PropsInfo,StateInfo>{
    constructor(props:PropsInfo){
        super(props)
    }
    render(){
        return (
            <div className={"box1"}>{this.props.data}</div>
        )
    }
}