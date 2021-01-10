import Icon from '../../assets/images/Logo.svg';

export default function navbar() {
  const navbarIcon = new Image();
  navbarIcon.src = Icon;
  navbarIcon.alt = 'Logo snake';

  const navbar = document.querySelector('nav section div:first-of-type');
  navbar.prepend(navbarIcon);
}
