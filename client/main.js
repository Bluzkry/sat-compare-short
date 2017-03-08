import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Layout),
    document.getElementById('mount')
  );
});
