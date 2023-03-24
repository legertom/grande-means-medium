import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetUserByIDHooks = ({id=1}) => {
  
  const [{ data, loading, error }, executeGetUser] = useHooks(
    {
      url: `${endpoint}users/${id}`,
      method: "GET",
    },
    { manual: false }
  );

  return { data, loading, error, executeGetUser };
};

export default useGetUserByIDHooks;
