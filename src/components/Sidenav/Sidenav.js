import React, { useEffect, useState } from 'react';
import classes from './Sidenav.module.css';
import SidenavToggle from './SidenavToggle/SidenavToggle';
import SidenavSection from './SidenavSection/SidenavSection';

const Sidenav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document
        .getElementsByTagName('main')[0]
        .classList.add(classes['sidenav-isOpen']);
    }
    return () => {
      document
        .getElementsByTagName('main')[0]
        .classList.remove(classes['sidenav-isOpen']);
    }
  }, [isOpen]);

  let classList = [classes['sidenav'], isOpen ? classes['sidenav-open'] : null];

  let headerClassList = [
    classes['sidenav-header'],
    isOpen ? classes['extended'] : null,
  ];

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
        <SidenavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {sections}
    </div>
  );
};

export default Sidenav;
