import { Button } from 'components';
import PropTypes from 'prop-types';

export const ButtonOption = ({ title, incrementState }) => (
  <Button onClick={incrementState} data-btn={title}>
    {title}
  </Button>
);

ButtonOption.propTypes = {
  title: PropTypes.string,
};
