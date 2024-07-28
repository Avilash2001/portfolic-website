export interface ISkill {
  name: string;
  icon: string;
  percentage: number;
  color: string;
}

export interface IJobTitle {
  title: string;
  description: string;
  skills: ISkill[];
}

export interface INavItem {
  name: string;
  link: string;
  showInNav: boolean;
}
