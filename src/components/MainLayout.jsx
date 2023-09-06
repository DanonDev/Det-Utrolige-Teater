import Header from './Header';
import Footer from './Footer';

import PropTypes from 'prop-types';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
