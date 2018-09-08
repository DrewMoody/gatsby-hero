import React from "react";

function Filter (props) {
  return (
    <div className='postfilter'>
      <h3>Filter</h3>
        <div onClick={() => props.setTab("all")} className={props.activeTab !== 'all' ? null : 'active'}>All</div>
        {props.tabsArr.map(x => {
          return <div key={x} onClick={() => props.setTab(x)}  className={props.activeTab === x ? 'active' : null}>{x.charAt(0).toUpperCase() + x.slice(1)}</div>}
        )}
    </div>
  )
}

export default Filter;