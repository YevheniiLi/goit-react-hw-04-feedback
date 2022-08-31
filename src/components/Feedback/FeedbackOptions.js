import { FeedbackList, FeedbackButton } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(key => (
        <li key={key}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
