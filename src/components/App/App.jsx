import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
// import { NotificationMessage } from 'components/Notification/Notification';
import { Box } from 'components/Box';
import { NotificationMessage } from 'components/Notification/Notification.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод стейта

  handleButton = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  //  Тотал
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Процент
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total > 0 ? Math.round((100 / total) * good) : 0;
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

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
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleButton} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          <NotificationMessage message />
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}
