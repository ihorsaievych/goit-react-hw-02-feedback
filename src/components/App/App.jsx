//import { FeedbackOptions, Section } from 'components'; //Statistics
import { Component } from 'react';
import { FeedbackOptions, Container, Section, Statistics } from 'components';

export class App extends Component {
  // static defaultProps = { data: [{ id: 0, label: 'unknown' }] };

  // constructor(props) {
  //   super(props);

  //   this.state = this.props.data.reduce((target, element, index) => {
  //     target[element.label] = 0;
  //     return target;
  //   }, {});

  //   this.state.neitralIndex = this.props.data
  //     .map((element, i) => i)
  //     .filter((element, i, array) => {
  //       if (Math.trunc(array.length / 2) === array.length / 2) {
  //         return i === array.length / 2 - 1 || i === array.length / 2;
  //       } else {
  //         return i === Math.trunc(array.length / 2);
  //       }
  //     });
  // }

  state = { good: 0, neutral: 0, bad: 0 };

  onIncrementState = event => {
    // console.log(event.target.dataset.btn);
    // console.log(this.state[event.target.dataset.btn]);
    this.setState({
      [event.target.dataset.btn]: this.state[event.target.dataset.btn] + 1,
    });

    // this.setState((prevState, props) => {
    //   [event.target.dataset.btn] = prevState[event.target.dataset.btn] + 1;
    // });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };

  render() {
    const {
      onIncrementState,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();

    return (
      <Container>
        <Section title={'React homework template'} />
        <FeedbackOptions
          //buttonList={this.props.data}
          buttonList={Object.keys(this.state)}
          incrementState={onIncrementState}
        ></FeedbackOptions>
        <Section title={'Statistics'} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Container>
      // <Section title={'React homework template'}>
      //   <FeedbackOptions buttonList={data}></FeedbackOptions>
      // </Section>
    );
  }
}

// {
//   data.map(element => (
//     <ButtonOption key={element.id} title={element.label}></ButtonOption>
//   ));
// }
