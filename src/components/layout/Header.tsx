import HeaderNav from './HeaderNav';
import siteConfig from '@/types/site-config';

const Header = () => {
  return (
    <header>
      <div> {siteConfig.siteName}</div>
      <div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
