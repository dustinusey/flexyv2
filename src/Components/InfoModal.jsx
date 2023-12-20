/**
 * InfoModal component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setInfoModal - The function to set the visibility of the InfoModal.
 * @returns {JSX.Element} The rendered InfoModal component.
 */

import PropTypes from 'prop-types';

export default function InfoModal(props) {
    return (
        <div className="info-modal">
            <button className="close" onClick={() => { props.setInfoModal(false) }}>x</button>
            <h1>INFO</h1>
        </div>
    )
}

InfoModal.propTypes = {
    setInfoModal: PropTypes.func.isRequired
};
