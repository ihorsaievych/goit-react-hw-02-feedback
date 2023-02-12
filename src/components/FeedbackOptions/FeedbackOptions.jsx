import { ButtonOption } from 'components';
import PropTypes from 'prop-types';

export function FeedbackOptions({ buttonList, incrementState }) {
  return buttonList.map(id => (
    <ButtonOption key={id} title={id} incrementState={incrementState} />
  ));
  // return buttonList.map(({ id, label }) => (
  //   <ButtonOption key={id} title={label} incrementState={incrementState} />
  // ));
}

FeedbackOptions.propTypes = {
  // buttonList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //   }).isRequired

  buttonList: PropTypes.arrayOf(PropTypes.string).isRequired,
  incrementState: PropTypes.func.isRequired,
};
