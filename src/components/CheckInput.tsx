import {CheckErr, CheckNone, CheckOk} from "../styles/InputStyled";
import {useState} from "react";

interface Prop extends React.InputHTMLAttributes<HTMLInputElement> {
    status? : 'err' | 'succ' | 'none',
}

export default (props : Prop) => {
    const image = ((props.status == 'err') ? '/image/rIcon feather-check.png' : (props.status == 'succ') ? '/image/gIcon feather-check.png' : '/image/Icon feather-check.png')
    return (
        // @ts-ignore
        <CheckNone {...props}
                   style={{backgroundImage : `url('${image}')`}}/>
    )

}
