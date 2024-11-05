
import './tag.css'
import React from 'react';
function Tag({tagName , selectTag ,selectedTag }) {
    const tagStyle = {
        HTML : {backgroundColor : '#fda821'},
        CSS : {backgroundColor : '#15d4c8'},
        JavaScript : {backgroundColor : '#ffd12c'},
        React : {backgroundColor : '#4cdafc'},
        Default : {backgroundColor : '#f9f9f9'  }
    }
    return ( 
        <button 
        type='button' className="tag" style={selectedTag ? tagStyle[tagName] : tagStyle.Default } onClick={()=>selectTag(tagName)}>{tagName}</button>
     );
}

export default Tag;