import PropTypes from "prop-types";

import s from './TransactionHistory.module.css';

export const TransactionHistoryTableItem = ({ id, type, amount, currency }) => {
    return (
        <tr className={s.row} key={id}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
        </tr>
    );
};

TransactionHistoryTableItem.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};