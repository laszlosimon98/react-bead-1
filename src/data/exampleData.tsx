export type MemberState = {
  [key: string]: string | number | boolean;
  id: number;
  name: string;
  bsalary: number;
  nsalary: number;
  selected: boolean;
  under25: boolean;
  justMarried: boolean;
  personal: boolean;
  family: boolean;
  marriedDate: string;
  isEntitled: boolean;
  dependents: number;
  beneficiaryDependents: number;
};

export const initMemberState: MemberState[] = [
  {
    id: 1,
    name: "Teszt Elek",
    bsalary: 100000,
    nsalary: 0,
    selected: true,
    under25: false,
    justMarried: false,
    personal: false,
    family: false,
    marriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
  {
    id: 2,
    name: "Minden Áron",
    bsalary: 185000,
    nsalary: 0,
    selected: false,
    under25: false,
    justMarried: false,
    personal: false,
    family: false,
    marriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
  {
    id: 3,
    name: "Vicc Elek",
    bsalary: 230000,
    nsalary: 0,
    selected: false,
    under25: false,
    justMarried: false,
    personal: false,
    family: false,
    marriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
];
