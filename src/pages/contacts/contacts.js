import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop, Card, Tooltip } from '@material-ui/core';

import { IMG_URL } from '../../configs/index';
import { useStyles } from './contacts.styles';
import Loader from '../../components/loader';
import { CONTACTS_PAGE_TITLES } from '../../translations/contacts.translations';
import { selectLanguageAndContactsLoadingContacts } from '../../redux/selectors/multiple.selectors';

const Contacts = ({ fromCheckout }) => {
  const { contacts, loading, language } = useSelector(selectLanguageAndContactsLoadingContacts);
  const styles = useStyles();
  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <Loader color='inherit' />
      </Backdrop>
    );
  }

  const contactsDisplay = contacts.map((contact) => (
    <div key={contact._id} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <Tooltip title={CONTACTS_PAGE_TITLES[language].showOnGoogleMaps}>
            <Card>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={contact.link}
                className={styles.link}
              >
                <img
                  className={styles.mapImage}
                  src={`${IMG_URL}${contact.images[language].value.medium}`}
                  alt={CONTACTS_PAGE_TITLES[language].location}
                />
              </a>
            </Card>
          </Tooltip>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>{CONTACTS_PAGE_TITLES[language].phone}</span>
            <span>+{contact.phoneNumber}</span>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>{CONTACTS_PAGE_TITLES[language].schedule}</span>
            <div className={styles.schedule}>
              {contact.openHours[language].value.split('|').map((el) => {
                const i = language ? 4 : 3;
                return (
                  <div key={el}>
                    <span className={styles.day}>{el.slice(0, i)}</span>
                    <span className={styles.time}>{el.slice(i)}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>{CONTACTS_PAGE_TITLES[language].address}</span>
            <div className={styles.contactAddress}>{contact.address[language].value}</div>
          </div>
          <div className={styles.contactsItem}>
            <span className={styles.contactName}>Email:</span>
            <span>{contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      {!fromCheckout && (
        <h2 className={styles.contactsTitle}>{CONTACTS_PAGE_TITLES[language].title}</h2>
      )}
      {contactsDisplay}
    </div>
  );
};

export default Contacts;
