
export interface ISocial {
  icon: string;
  link: string;
}
export interface ITeamDT {
  id: number;
  image: string;
  designation: string;
  name: string;
  socials: ISocial[];
}