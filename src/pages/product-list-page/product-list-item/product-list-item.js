import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHryvnia, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './product-list-item.style';
import StarRating from '../../../components/star-rating';
import { AVAILABLE_COUNT_LABEL_TEXT } from '../../../translations/product-list.translations';
import { IMG_URL } from '../../../configs';

const ProductListItem = ({ product, category }) => {
  const styles = useStyles({
    image: `${IMG_URL}${product.images.primary.small}`
  });

  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));
  const currencySign =
    currency === 0 ? faHryvnia : currency === 1 ? faDollarSign : '';
  return (
    <Link to={`/product/${product._id}`} className={styles.productItem}>
      <Card className={styles.name}>
        {product.name[language].value}
        <StarRating size='small' readOnly rate={product.rate} />
        <div>
          <span className={styles.title}>
            <span>
              <FontAwesomeIcon icon={currencySign} />
              {product.basePrice[currency].value / 100}
            </span>
            {!!product.availableCount && (
              <span>
                {AVAILABLE_COUNT_LABEL_TEXT[language].value}:{' '}
                {product.availableCount}
              </span>
            )}
          </span>
        </div>
      </Card>
    </Link>
  );
};

ProductListItem.propTypes = {
  category: PropTypes.string,
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.arrayOf(
      PropTypes.shape({
        lang: PropTypes.string,
        value: PropTypes.string
      })
    ),
    rate: PropTypes.number,
    basePrice: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number
      })
    ),
    images: PropTypes.shape({
      isMain: PropTypes.string,
      large: PropTypes.string,
      name: PropTypes.arrayOf(
        PropTypes.shape({
          lang: PropTypes.string,
          value: PropTypes.string
        })
      )
    })
  })
};
ProductListItem.defaultProps = {
  category: '',
  product: {
    _id: '',
    basePrice: [
      {
        value: 1
      }
    ],
    images: {
      primary: { medium: '' },
      additional: {}
    },
    rate: 1
  }
};

export default ProductListItem;
