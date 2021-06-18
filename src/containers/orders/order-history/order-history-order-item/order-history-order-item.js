import React from 'react';
import { useStyles } from './order-history-order-item.styles';
import { ORDER_TABLE_FIELDS } from '../../../../translations/order.translations';

const OrderHistoryOrderItem = ({ item, language, currency }) => {
  const styles = useStyles();

  const bottomMaterial = item.bottomMaterial.length && (
    <span>
      {ORDER_TABLE_FIELDS[language].bagBottom}: {item.bottomMaterial[language].value}
    </span>
  );

  return (
    <div className={styles.root} data-cy='order-history-order-item'>
      <div className={styles.itemData}>
        <div className={styles.image} data-cy='order-history-order-item-img' />
        <div className={styles.description} data-cy='order-history-order-item-description'>
          <span className={styles.itemName}>{item.name[language].value}</span>
          {bottomMaterial || null}
        </div>
      </div>
      <div>
        <span>{item.quantity}</span>
      </div>
      <div className={styles.price}>
        <span>
          {(item.actualPrice[currency].value / 100).toFixed(2)}
          {item.actualPrice[currency].currency}
        </span>
      </div>
    </div>
  );
};

export default OrderHistoryOrderItem;
