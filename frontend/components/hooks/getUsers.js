import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetUserHooks = ({manual=false}) => {
  
  const [{ data, loading, error }, executeGetUser] = useHooks(
    {
      url: `${endpoint}users`,
      method: "GET",
    },
    { manual }
  );
  let LoadingUser = loading
  
  let  usersData =  data?.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.email === value.email
  ))
)
  
  return { usersData, LoadingUser, error, executeGetUser };
};

export default useGetUserHooks;
