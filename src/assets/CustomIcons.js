import {Icon} from "@material-ui/core";
import { ReactComponent as MaxWay } from "./img/MaxWayLogo.svg"
import {ReactComponent as Burger} from './img/burger.svg'
 
export function MaxWayIcon(props) {
    return (
        <Icon style={{width:"auto",height:"auto",padding:"0",margin:"0"}}>
           <MaxWay/>
        </Icon>
    );
}

export function BurgerIcon(props) {
    return (
        <Icon style={{width:"auto",height:"auto",padding:"0",margin:"0"}}>
           <Burger/>
        </Icon>
    );
}

// export function PhoneIcon(props) {
//     return (
//         <Icon style={{width:"auto",height:"auto",padding:"0",margin:"0"}}>
//            <MaxWay/>
//         </Icon>
//     );
// }