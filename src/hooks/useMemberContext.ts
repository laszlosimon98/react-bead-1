import { useContext } from "react";
import { MemberContext } from "../context/MembersProvider";

export const useMemberContext = () => {
  const context = useContext(MemberContext);

  if (!context) {
    throw new Error("useMemberContext must be used inside the MemberProvider");
  }

  return context;
};
