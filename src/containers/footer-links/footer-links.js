import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FOOTER_SOCIAL_NETWORK_LINKS } from '../../translations/footer.translations';

import { useStyles } from './footer-links.styles';

const FooterLinks = ({ showTitle, socialIconsStyles, position }) => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  const styles = useStyles({ position });

  return (
    <div className={styles.cardBody}>
      <div className={styles.iconsBox}>
        {showTitle && (
          <div className={styles.cardTitle}>
            <Typography variant='h5'>{FOOTER_SOCIAL_NETWORK_LINKS[language].title}</Typography>
          </div>
        )}
        <div className={styles.iconsContainer}>
          <a
            className={styles.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={socialIconsStyles} icon={faFacebook} />
          </a>
          <a
            className={styles.iconWrap}
            href={FOOTER_SOCIAL_NETWORK_LINKS.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon className={socialIconsStyles} icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
