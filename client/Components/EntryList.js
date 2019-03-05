import React, { PropTypes } from 'react';

/**
   * Display entries
   * @param {entries} state
   * @returns {null} Returns null
   */
export default function EntryList({ entries }) {
  return (
    <div className="well">
    {
        // console.log(entries)
        // entries.map(entry => <p key={entry.id}>{entry.body}<a href="note.html">More</a>
    // </p>
}
    <hr />
    <span id="date">Wed June 5</span>

   </div>
  );
}
EntryList.propTypes = {
  // entries: PropTypes.array.isRequired
};
