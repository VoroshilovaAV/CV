export type SkillCardType = {
  image: string;
  name: string;
};

export type ProjectCardType = {
  image: string;
  name: string;
  tech: string;
  description: string;
  deploy: string;
  gh: string;
};

export type CourseType = {
  id: number;
  year: string;
  company: string;
  name: string;
  result: string;
  link: string;
};

export const lastCardId = 2;
