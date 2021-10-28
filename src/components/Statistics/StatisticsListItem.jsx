import PropTypes from "prop-types";
import { generateColor } from '../../templates/getRandomRGB.js'

import s from "./Statistics.module.css";

export const StatisticsListItem = ({ label, percentage }) => {
    return (
        <li className={s.item} style={{ backgroundColor: generateColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    );
};


StatisticsListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};
