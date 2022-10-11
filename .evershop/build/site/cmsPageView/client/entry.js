
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from "@evershop/core/src/lib/components/Area";
      import Hydrate from "@evershop/core/src/lib/components/react/client/Hydrate";
      
Area.defaultProps.components = {
  'icon-wrapper': {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGFsbFxNaW5pQ2FydC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGFsbFxNaW5pQ2FydC5qcw==',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\all\\MiniCart.js')
    }
  },
  body: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTGF5b3V0Lmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTGF5b3V0Lmpz',
      sortOrder: 1,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\Layout.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTm90aWZpY2F0aW9uLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTm90aWZpY2F0aW9uLmpz',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\Notification.js')
    }
  },
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTG9nby5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTG9nby5qcw==',
      sortOrder: 1,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\Logo.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTWVudS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTWVudS5qcw==',
      sortOrder: 5,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\Menu.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTW9iaWxlTWVudS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTW9iaWxlTWVudS5qcw==',
      sortOrder: 5,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\MobileMenu.js')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTWV0YS5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcc2l0ZVxhbGxcTWV0YS5qcw==',
      sortOrder: 5,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\site\\all\\Meta.js')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );