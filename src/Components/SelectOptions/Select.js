import './Select.css'

const Select = ({options = [], onSelect}) => {

    return(
        <select onChange={(evt) => onSelect(evt.target.value)}>
            {options.map(op => <option key={op.id} value={op.value}>{op.text}</option>)}            
        </select>
    )
}

export default Select;