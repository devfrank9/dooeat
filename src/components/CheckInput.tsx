import {CheckErr, CheckNone, CheckOk} from "../styles/InputStyled";

interface Prop extends React.HTMLProps<HTMLInputElement> {
    status? : 'err' | 'succ' | 'none',
}

export default (props : Prop) => {
    const ComInput = (props.status == 'err') ? CheckErr : (props.status == 'succ') ? CheckOk : CheckNone;

    return (
        // @ts-ignore
        <ComInput {...props}/>
    )

}
