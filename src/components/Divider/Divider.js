import classes from './Divider.module.css';

const Divider = (props) => {

  const dividerSizeMap = {
    small: 'divider--small',
    medium: 'divider--medium',
    large: 'divider--large',
    full: 'divider--full',
  }

  const dividerMarginMap = {
    none: 'margin--none',
    small: 'margin--small',
    medium: 'margin--medium',
    large: 'margin--large',
    full: 'margin--full',
  }

  let classList = [
    classes['divider'],
    props.size
      ? classes[dividerSizeMap[props.size]]
      : classes[dividerSizeMap['large']],
    props.marginSize
      ? classes[dividerMarginMap[props.marginSize]]
      : classes[dividerMarginMap['large']],
  ];

  return <hr className={classList.join(' ')} />;
};

export default Divider;