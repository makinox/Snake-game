import Icon from '../../assets/images/Logo.svg';
import Manifest from '../../assets/data/manifest.webmanifest';

export default function Helmet() {
  const faviconElement = document.createElement('link');
  faviconElement.rel = 'icon';
  faviconElement.href = Icon;

  // const manifestElement = document.createElement('link');
  // manifestElement.rel = 'manifest';
  // faviconElement.href = Manifest;
  // faviconElement.crossOrigin = 'anonymous';

  document.head.appendChild(faviconElement);
  // document.head.appendChild(manifestElement);
}
