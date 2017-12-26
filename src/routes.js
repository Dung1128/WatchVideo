import Markets from './container/Markets';
import ChangeLogs from './container/ChangeLogs';
import VIPGroups from './container/VIPGroups';
import Home from './container/Home';

export default {
  markets: {
    title: 'Markets',
    Page: Markets,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'home',
    footerType: 'true',
    cache: false
  },
  changeLogs: {
    title: 'ChangeLogs',
    Page: ChangeLogs,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  vipGroups: {
    title: 'VIPGroups',
    Page: VIPGroups,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  notFound: {
    title: 'Markets',
    Page: Markets,
    headerType: 'none',
    footerType: 'none',
    cache: true
  }
};
