import PropTypes from 'prop-types';

export default function Square({ value }) {
    function handleClick() {
        console.log('handleClick: ' + value);
    }

    return <button className="square" onClick={handleClick}>{value}</button>;
}

Square.propTypes = {
    value: PropTypes.string.isRequired
}