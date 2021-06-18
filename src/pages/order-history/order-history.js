import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import OrderHistoryOrder from '../../containers/orders/order-history/order-history-order';
import EmptyOrderHistory from '../../containers/orders/order-history/empty-order-history';
import { useStyles } from './order-history.styles';

const OrderHistory = () => {
  const { orders, loading } = useSelector(({ User }) => ({
    orders: User.userOrders,
    loading: User.userLoading
  }));
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {orders && orders.length ? (
        orders.map((item, index) => <OrderHistoryOrder order={item} key={index} />)
      ) : (
        <EmptyOrderHistory />
      )}
    </div>
  );
};

export default OrderHistory;
