import PropTypes from 'prop-types';

import { TransactionHistoryTableItem } from './TransactionHistoryTableItem.jsx'

import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    const TransactionHistoryElement = items.map((item) => (
        <TransactionHistoryTableItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
    ));
    return (
        <table className={s.transactionHistory}>
            <thead className={s.title}>
                <tr>
                    <th className={s.text}>Type</th>
                    <th className={s.text}>Amount</th>
                    <th className={s.text}>Currency</th>
                </tr>
            </thead>

            <tbody>{TransactionHistoryElement}</tbody>
        </table>
    );
}

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default TransactionHistory;