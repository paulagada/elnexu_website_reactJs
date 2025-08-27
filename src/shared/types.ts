import type { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Services = "services",
  About = "about",
  Contact = "contact"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export type PosItem = {
  img: string;
  heading: string;
  details: string;
};