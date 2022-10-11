import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Area from "@evershop/core/src/lib/components/Area";
Area.defaultProps.components = {
  'icon-wrapper': {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGFsbFxNaW5pQ2FydC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGFsbFxNaW5pQ2FydC5qcw==',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\all\\MiniCart.js')
    }
  },
  content: {
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XENoZWNrb3V0Lmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XENoZWNrb3V0Lmpz',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\Checkout.js')
    }
  },
  checkoutSteps: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XEN1c3RvbWVySW5mb1N0ZXAuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XEN1c3RvbWVySW5mb1N0ZXAuanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\CustomerInfoStep.js')
    },
    XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFBheW1lbnRTdGVwLmpz: {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFBheW1lbnRTdGVwLmpz',
      sortOrder: 20,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\PaymentStep.js')
    },
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFNoaXBtZW50U3RlcC5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFNoaXBtZW50U3RlcC5qcw==',
      sortOrder: 15,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\ShipmentStep.js')
    }
  },
  checkoutShippingAddressForm: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFNoaXBwaW5nTWV0aG9kcy5qcw==': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFNoaXBwaW5nTWV0aG9kcy5qcw==',
      sortOrder: 60,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\ShippingMethods.js')
    }
  },
  checkoutPageRight: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFN1bW1hcnkuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xjaGVja291dFxwYWdlc1xzaXRlXGNoZWNrb3V0XFN1bW1hcnkuanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\checkout\\pages\\site\\checkout\\Summary.js')
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
  },
  checkoutPaymentMethods: {
    'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xzdHJpcGVccGFnZXNcc2l0ZVxjaGVja291dFxQYXltZW50Rm9ybUNvbnRleHQuanM=': {
      id: 'XG5vZGVfbW9kdWxlc1xAZXZlcnNob3BcY29yZVxzcmNcbW9kdWxlc1xzdHJpcGVccGFnZXNcc2l0ZVxjaGVja291dFxQYXltZW50Rm9ybUNvbnRleHQuanM=',
      sortOrder: 10,
      component: require('D:\\GitHubsLocal\\nh\\node_modules\\@evershop\\core\\src\\modules\\stripe\\pages\\site\\checkout\\PaymentFormContext.js')
    }
  }
} 