import React, { Component } from 'react';
import AppRoutes from './routes';
import Menu from './common/menu';


class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Menu />
        <main className="mdl-layout__content">
          <div className="page-content">
            <AppRoutes />
          </div>
        </main>
        
      </div>
    );
  }
}

export default App;