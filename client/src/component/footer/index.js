import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content-link">
                    <p>Company</p>
                    <p>Carrers</p>
                    <p>Contact us</p>
                    <p>media center</p>
                    <p>privacy</p>
                    <p>model</p>
                </div>
                <div className="footer__content-name">
                    <p>Copyright 2020</p>
                    <p>By Phạm Văn Dũng</p>
                    <p>phone : 0336149646</p>
                </div>
            </div>
            <div className="footer__more" >
                <i class="fa fa-facebook-official footer__more-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram footer__more-icon" aria-hidden="true"></i>
                <i class="fa fa-youtube-play footer__more-icon " aria-hidden="true"></i>
                <i class="fa fa-twitter-square footer__more-icon" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Footer;