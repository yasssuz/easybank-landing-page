import getQuery from './utils';

export default function handleToggler(toggler) {
  toggler.classList.toggle('active');
  getQuery('.header__navigation').classList.toggle('active');
  getQuery('html').classList.toggle('navbar-active');
  getQuery('#overlay').classList.toggle('active');
}
