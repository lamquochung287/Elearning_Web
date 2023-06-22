import React from 'react';

import { Tooltip } from 'react-tippy';
import './TippyCustom.scss';
import 'react-tippy/dist/tippy.css';

export const TippyCustom = ({ children }) => {
  const listData = [
    {
      typeTittle: 'Web Development'
    },
    {
      typeTittle: 'Computer Science'
    },
    {
      typeTittle: 'Data Science'
    },
    {
      typeTittle: 'Mobile Development'
    }
  ];

  const renderData = () => {
    return listData.map((data, index) => {
      return (
        <div key={index}>
          <a
            href="#"
            target="_self"
            className="tippy_tab"
          >
            {data.typeTittle}
          </a>
        </div>
      );
    });
  };

  const RenderResult = () => (
    <div className="wapper_tippy_data">{renderData()}</div>
  );

  return (
    <Tooltip
      position={'bottom'}
      interactive
      html={<RenderResult />}
      theme="light"
    >
      {children}
    </Tooltip>
  );
};
export default TippyCustom;
