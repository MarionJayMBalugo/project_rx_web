export default {
  sidebarMenu: [
    {accountType: 'ALL', accountStatus: 'ALL', showOnAdmin: true, description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null}
  ],
  profileMenu: [{
    title: 'My Profile',
    icon: 'fa fa-cog',
    route: '/profile'
  }, {
    title: 'Linked Accounts',
    icon: 'fa fa-users',
    route: '/linked_accounts'
  }, {
    title: 'Invite Friends',
    icon: 'fa fa-users',
    route: '/referrals'
  }],
  APP_NAME: 'RunwayExpress',
  APP_NAME_HTML: 'RunwayExpress',
  APP_EMAIL: 'support@runwayexpress.com',
  COMPANY: 'RunwayExpress',
  COMPANY_URL: 'https://runwayexpress.com',
  APP_URL: 'https://runwayexpress.com',
  COPYRIGHT: 'RunwayExpress ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'AGENCY'
  }],
  plan: false,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['cellular_number', 'address', 'sex', 'birth_date']},
    {title: 'Account', type: 'account', allowed: []}
  ],
  referral: {
    message: 'this is a test. ',
    emailMessage: '.This is a test.'
  },
  socialMedia: {
    facebook: 'runwayexpress'
  },
  pusher: {
    channel: 'runwayexpress',
    notifications: 'Notifications',
    messages: 'Message',
    validation: 'Validation'
  },
  broadcastingFlag: true,
  passwordLimit: 8,
  alertFlag: false
}
