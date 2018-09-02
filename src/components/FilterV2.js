import React from "react";

function FilterV2 (props) {
  return (
    <div className='postfilter'>
      <h3>Filter</h3>
        <div className='tabfilter' data-tab="all" onClick={() => props.setTab("all")}>All</div>
        {props.tabsArr.map(x => {
          return <div key={x} className='tabfilter' data-tab={x} onClick={() => props.setTab(x)}>{x.charAt(0).toUpperCase() + x.slice(1)}</div>}
        )}
    </div>
  )
}

export default FilterV2;