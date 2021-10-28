import { StatisticsListItem } from './StatisticsListItem.jsx';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    const StatisticsElement = stats.map((item) => (
        <StatisticsListItem key={item.id} label={item.label} percentage={item.percentage} />
    ));
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>{StatisticsElement}</ul>
        </section>
    );
};

Statistics.defaultProps = {
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ),
};


export default Statistics;