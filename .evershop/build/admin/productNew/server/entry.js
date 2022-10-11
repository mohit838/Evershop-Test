import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Area from "@evershop/core/src/lib/components/Area";
Area.defaultProps.components = {
  adminMenu: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxDYXRhbG9nTWVudUdyb3VwLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxDYXRhbG9nTWVudUdyb3VwLmpz',
      sortOrder: 20,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\all\\CatalogMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxhbGxcQ2hlY2tvdXRNZW51R3JvdXAuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xhZG1pblxhbGxcQ2hlY2tvdXRNZW51R3JvdXAuanM=',
      sortOrder: 40,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\admin\\all\\CheckoutMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXENtc01lbnVHcm91cC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXENtc01lbnVHcm91cC5qcw==',
      sortOrder: 50,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\CmsMenuGroup.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFF1aWNrTGlua3MuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFF1aWNrTGlua3MuanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\QuickLinks.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXENvdXBvbk1lbnVHcm91cC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXENvdXBvbk1lbnVHcm91cC5qcw==',
      sortOrder: 30,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\promotion\\pages\\admin\\all\\CouponMenuGroup.js')
    }
  },
  quickLinks: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxOZXdQcm9kdWN0UXVpY2tMaW5rLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXGFsbFxOZXdQcm9kdWN0UXVpY2tMaW5rLmpz',
      sortOrder: 20,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\all\\NewProductQuickLink.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXE5ld0NvdXBvblF1aWNrTGluay5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xwcm9tb3Rpb25ccGFnZXNcYWRtaW5cYWxsXE5ld0NvdXBvblF1aWNrTGluay5qcw==',
      sortOrder: 30,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\promotion\\pages\\admin\\all\\NewCouponQuickLink.js')
    }
  },
  rightSide: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcQXR0cmlidXRlcy5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcQXR0cmlidXRlcy5qcw==',
      sortOrder: 30,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Attributes.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcSW52ZW50b3J5Lmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcSW52ZW50b3J5Lmpz',
      sortOrder: 15,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Inventory.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcU3RhdHVzLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcU3RhdHVzLmpz',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Status.js')
    }
  },
  leftSide: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcR2VuZXJhbC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcR2VuZXJhbC5qcw==',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\General.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcTWVkaWEuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcTWVkaWEuanM=',
      sortOrder: 15,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Media.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcU2VvLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcU2VvLmpz',
      sortOrder: 60,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\Seo.js')
    }
  },
  content: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcUGFnZUhlYWRpbmcuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcUGFnZUhlYWRpbmcuanM=',
      sortOrder: 5,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\PageHeading.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcUHJvZHVjdEVkaXRGb3JtLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjYXRhbG9nXHBhZ2VzXGFkbWluXHByb2R1Y3RFZGl0K3Byb2R1Y3ROZXdcUHJvZHVjdEVkaXRGb3JtLmpz',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\catalog\\pages\\admin\\productEdit+productNew\\ProductEditForm.js')
    }
  },
  body: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExheW91dC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExheW91dC5qcw==',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Layout.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5vdGlmaWNhdGlvbi5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5vdGlmaWNhdGlvbi5qcw==',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Notification.js')
    }
  },
  header: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExvZ28uanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXExvZ28uanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Logo.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFNlYXJjaEJveC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXFNlYXJjaEJveC5qcw==',
      sortOrder: 20,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\SearchBox.js')
    }
  },
  head: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE1ldGEuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE1ldGEuanM=',
      sortOrder: 5,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Meta.js')
    }
  },
  adminNavigation: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5hdmlnYXRpb24uanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjbXNccGFnZXNcYWRtaW5cYWxsXE5hdmlnYXRpb24uanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\cms\\pages\\admin\\all\\Navigation.js')
    }
  }
} 