import React, { useState } from 'react';
import classes from './Sidenav.module.css';
import SidenavToggle from './SidenavToggle/SidenavToggle';
import SidenavSection from './SidenavSection/SidenavSection';

const Sidenav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  let classList = [
    classes['sidenav'],
    isOpen ? classes['sidenav-open'] : null
  ];

  let headerClassList = [
    classes['sidenav-header'],
    isOpen ?  classes['extended'] :  null
  ]

  let sections = (
    <React.Fragment>
      {props.sections.map((section) => {
        return (
          <SidenavSection
            key={section.id}
            extended={isOpen}
            label={section.label}
            items={section.items}
          />
        );
      })}
    </React.Fragment>
  );

  return (
    <div className={classList.join(' ')}>
      <div className={headerClassList.join(' ')}>
        <h2>Income App</h2>
        <SidenavToggle onClick={() => setIsOpen(!isOpen)} />
      </div>
      {sections}
    </div>
  );
};

export default Sidenav;
