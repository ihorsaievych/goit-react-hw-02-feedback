import PropTypes from 'prop-types';
import { SectionStyle } from 'components';

export function Section({ title, children }) {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
