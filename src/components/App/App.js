import { useState } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Box } from 'components/Box';
import { NotificationMessage } from 'components/Notification/Notification.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleChange = (type) => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  //  Тотал
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Процент
  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

  return (
    <Box
      display="grid"
      m="auto"
      mt={6}
      textAlign="center"
      border="4px solid "
      borderColor="greenhover"
      borderRadius="5px"
      bg="lightgreen"
      width={600}
      p={3}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        <NotificationMessage message />
      </Section>

      <GlobalStyle />
    </Box>
  );
}
