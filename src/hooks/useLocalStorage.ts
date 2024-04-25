import { MemberType } from "../data/exampleData";

const useLocalStorage = (storage: string) => {
  const loadMembers = () => {
    return JSON.parse(localStorage.getItem(storage) as string);
  };

  const saveMembers = (members: MemberType[]) => {
    localStorage.setItem(storage, JSON.stringify(members));
  };

  return { loadMembers, saveMembers };
};

export default useLocalStorage;
