import React from 'react';

const Footer = () => {
    return (
        <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p>© {new Date().getFullYear()} Andressa Chagas. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
