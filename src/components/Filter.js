import React from "react";

function Filter (props) {
  console.log(props.tabsArr);
  return (
    <div className='postfilter'>
      <h3>Filter</h3>
        <div className='tabfilter' data-tab="all" onClick={() => props.setTab("all")}>All</div>
        <div className='tabfilter' data-tab="tag1" onClick={() => props.setTab("tag1")}>Tag1</div>
        <div className='tabfilter' data-tab="tag2" onClick={() => props.setTab("tag2")}>Tag2</div>
        <div className='tabfilter' data-tab="tag3" onClick={() => props.setTab("tag3")}>Tag3</div>
        <div className='tabfilter' data-tab="tag4" onClick={() => props.setTab("tag4")}>Tag4</div>
    </div>
  )
}

export default Filter;