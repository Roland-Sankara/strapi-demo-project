import React from 'react';
import './pagination.css';

class Pagination extends React.Component {

  render() {
    return (
      <div id="pageCounter">
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>...</button>
      <button>6</button>
      <button>></button>
      </div>
    );
  }
}

export default Pagination;

