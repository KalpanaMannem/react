import react from "react";
import Menu from './Menu/index'
export const AfterLogin =(props)=>{
return <div>
    <Menu fnUpdateLogin={props.fnUpdateLogin}/>
</div>
}