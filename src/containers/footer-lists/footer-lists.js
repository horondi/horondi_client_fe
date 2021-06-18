import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { getCategoryURL } from '../../pages/home/categories-list/categories-list';
import { useStyles } from './footer-lists.styles';

import {
  FOOTER_INFORMATION,
  FOOTER_CONTACTS,
  FOOTER_CATALOGS
} from '../../translations/footer.translations';

const FooterLists = () => {
  const styles = useStyles();
  const { categories, language, contacts } = useSelector(({ Categories, Language, Contacts }) => ({
    categories: Categories.list,
    language: Language.language,
    contacts: Contacts.contacts
  }));

  const categoriesList = categories
    ? categories.map(({ _id, name }) => (
      <div key={_id}>
        <Typography variant='subtitle2'>
          <Link className={styles.cardLink} to={`/${getCategoryURL(name)}`}>
            {name[language].value}
          </Link>
        </Typography>
      </div>
    ))
    : null;

  const informationList = FOOTER_INFORMATION[language].items.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={item.url}>
          {item.item}
        </Link>
      </Typography>
    </div>
  ));

  const contactsList = contacts.map((item) => (
    <div key={item._id}>
      <div>
        <Typography variant='subtitle2'>+{item.phoneNumber}</Typography>
      </div>
      <div>
        <Typography variant='subtitle2'>{item.email}</Typography>
      </div>
      <div>
        <Typography variant='subtitle2'>{item.address[language].value}</Typography>
      </div>
    </div>
  ));
  return (
    <>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{FOOTER_CATALOGS[language].title}</Typography>
        </div>
        {categoriesList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{FOOTER_INFORMATION[language].title}</Typography>
        </div>
        {informationList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>{FOOTER_CONTACTS[language].title}</Typography>
        </div>
        {contactsList}
        <div key={FOOTER_CONTACTS[language].map.id}>
          <Typography variant='subtitle2'>
            <Link to='/contacts' className={styles.cardLink}>
              <span>{FOOTER_CONTACTS[language].map.item}</span>
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FooterLists;
