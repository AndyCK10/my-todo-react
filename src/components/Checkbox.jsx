import PropTypes from "prop-types";

export default function Checkbox({text, isChecked}) {
    return (
        <>
        <div>
            {text} {isChecked ? 'is done' : 'is in progress'}
        </div>
        </>
    )
}

Checkbox.prototype = {
    text: PropTypes.string,
    isChecked: PropTypes.bool,
  };