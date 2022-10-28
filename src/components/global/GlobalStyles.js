import PropTypes from 'prop-types';

import '@assets/styles/global/GlobalStyles.module.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
