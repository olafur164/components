import { ILanguage } from 'interfaces';

// ========================
// Interfaces
// ========================

export interface IMegaMenuProps {
  menuTree: any;
  languages: ILanguage[];
  industryLogo: string;
  changeComponentAnimatedState: (componentId: string, state: string) => void;
  className?: string;
  docked?: boolean;
  onLocaleChange?: (locale: string) => void;
  dictionary?: any;
  useMobileMenu?: boolean;
}

export interface IArrow {
  topLevel?: boolean;
  docked?: boolean;
  show?: boolean;
}

export interface IIndustry {
  name: string;
  icon: string;
  mainContent: any;
  src: string;
}

export interface ITopLevelLink {
  docked?: boolean;
  useMobileMenu?: boolean;
}

export interface IMegaMenu {
  name: string;
  src?: string;
  industries?: IIndustry[];
  mainContent?: any;
  outsideClickIgnoreClass?: string;
  color?: string;
}

export interface IDocked {
  docked: boolean;
}
