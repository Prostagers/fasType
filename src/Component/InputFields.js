import {
    FormGroup, Label, Input, FormFeedback
} from "reactstrap";

const InputFields = props => (
    <FormGroup floating>
        <Input type={props.type} name={props.id} id={props.id} invalid={props.invalid} valid={props.valid}
            value={props.value} onChange={props.onChange}/>
        <Label for={props.id}>{props.label}</Label>
        <FormFeedback invalid>{props.invalidMessage}</FormFeedback>
        <FormFeedback valid>{props.validMessage}</FormFeedback>
    </FormGroup>
)

export default InputFields;