import { NavigationComponent } from 'react-navigation';

export interface routeConfig {
  key: string;
  screen: NavigationComponent;
  title?: string;
  activeIcon: JSX.Element;
  unaActiveIcon: JSX.Element;
};
