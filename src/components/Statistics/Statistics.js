import { Notification } from 'components/Notification/Notification';
import { ReviewList, ReviewItem, ReviewName } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total > 0 ? (
    <ReviewList>
      <ReviewItem>
        {' '}
        Good:
        <ReviewName>{good}</ReviewName>
      </ReviewItem>
      <ReviewItem>
        {' '}
        Neutral:
        <ReviewName>{neutral}</ReviewName>
      </ReviewItem>
      <ReviewItem>
        {' '}
        Bad:
        <ReviewName>{bad}</ReviewName>
      </ReviewItem>
      <ReviewItem>
        {' '}
        Total:
        <ReviewName>{total}</ReviewName>
      </ReviewItem>
      <ReviewItem>
        {' '}
        Positive feedback:
        <ReviewName>{positivePercentage}%</ReviewName>
      </ReviewItem>
    </ReviewList>
  ) : (
    <Notification message="No feedback given " />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
