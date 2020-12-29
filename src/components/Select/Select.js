import React from 'react';
import classes from './Select.module.css';
import ReactSelect from 'react-select';

const Select = (props) => {
  const customStyles = {
    control: (provided, state) => ({
      width: '100%',
      height: 36,
      backgroundColor: 'var(--palette-shade-3)',
      borderRadius: 18,
      display: 'flex',
      border: state.menuIsOpen ? '2px solid var(--accent-blue)' : 'none',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border 0.2s',
      color: 'var(--text-color)',
      padding: '4px 14px',
      fontSize: '0.95rem',
      cursor: 'pointer',
    }),
    placeholder: () => ({
      color: 'var(--text-color-shade)',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'var(--text-color-shade)',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingRight: 0,
      color: 'var(--text-color-shade)',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--palette-shade-2)',
      borderRadius: 12,
      border: '1px solid var(--palette-shade-5)',
      boxShadow: '0px 0px 8px var(--text-color-opaque)',
    }),
    menuList: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      padding: '8px 12px',
      boxSizing: 'border-box',
    }),
    option: (provided, state) => ({
      ...provided,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 42,
      padding: 12,
      boxSizing: 'border-box',
      margin: '4px 8px',
      fontSize: '0.98rem',
      fontWeight: 600,
      textDecoration: 'none',
      outline: 'none',
      border: 'none',
      color: state.isSelected ? 'var(--accent-blue)' : 'var(--text-color)',
      cursor: 'pointer',
      transition: 'background-color 0.1s',
      borderRadius: 8,
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'var(--palette-shade-4)',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--text-color)',
    }),
  };

  return (
    <div className={classes['react-select-wrapper']}>
      <label className={classes['react-select-label']}>{props.label}</label>
      <ReactSelect styles={customStyles} {...props} />
    </div>
  );
};

export default Select;
