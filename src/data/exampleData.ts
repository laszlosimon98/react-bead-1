import { MemberState } from "../store/features/members/membersSlice";

export const exampleData: MemberState[] = [
  {
    id: 1,
    name: "Teszt Elek",
    bsalary: 100000,
    nsalary: 0,
    isSelected: true,
    isUnder25Checked: false,
    isJustMarriedChecked: false,
    isPersonalChecked: false,
    isFamilyChecked: false,
    hasMarriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
  {
    id: 2,
    name: "Minden Áron",
    bsalary: 185000,
    nsalary: 0,
    isSelected: false,
    isUnder25Checked: false,
    isJustMarriedChecked: false,
    isPersonalChecked: false,
    isFamilyChecked: false,
    hasMarriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
  {
    id: 3,
    name: "Vicc Elek",
    bsalary: 230000,
    nsalary: 0,
    isSelected: false,
    isUnder25Checked: false,
    isJustMarriedChecked: false,
    isPersonalChecked: false,
    isFamilyChecked: false,
    hasMarriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  },
];
