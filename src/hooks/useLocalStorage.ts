import { MemberState } from "../store/features/members/membersSlice";

const useLocalStorage = (storage: string) => {
  const loadMembers = () => {
    return JSON.parse(localStorage.getItem(storage) as string);
  };

  const saveMembers = (members: MemberState[]) => {
    localStorage.setItem(storage, JSON.stringify(members));
  };

  return { loadMembers, saveMembers };
};

export default useLocalStorage;
