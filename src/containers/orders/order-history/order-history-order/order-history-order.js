import React from 'react';
import { useSelector } from 'react-redux';

import OrderTable from '../../order/order-table';
import OrderHistoryOrderItem from '../order-history-order-item';
import { useStyles } from './order-history-order.styles';
import {
  ORDER_HISTORY_TABLE_FIELDS,
  ORDER_STATUSES
} from '../../../../translations/order.translations';

const OrderHistoryOrder = ({ order }) => {
  const { language, currency } = useSelector(({ Language, Currency }) => ({
    language: Language.language,
    currency: Currency.currency
  }));
  const styles = useStyles();

  const orderList = order.items.map((item, index) => (
    <OrderHistoryOrderItem key={index} item={item} language={language} currency={currency} />
  ));

  const totalPrice = (order.totalItemsPrice[currency].value / 100).toFixed(2);
  const orderCurrency = order.totalItemsPrice[currency].currency;

  return (
    <div className={styles.root} data-cy='order-history-order'>
      <div className={styles.tableHeader}>
        <div>
          {ORDER_HISTORY_TABLE_FIELDS[language].order}:{order._id}
        </div>
        <div>
          {ORDER_HISTORY_TABLE_FIELDS[language].date}:
          {new Intl.DateTimeFormat('en-US').format(order.dateOfCreation)}
        </div>
        <div>
          {ORDER_HISTORY_TABLE_FIELDS[language].status}:{ORDER_STATUSES[order.status][language]}
        </div>
      </div>
      <OrderTable items={orderList} totalPrice={totalPrice} currency={orderCurrency} />
    </div>
  );
};

export default OrderHistoryOrder;
