import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useFollowUserHooks = () => {
  const [{ data, loading, error }, executeFollowUser] = useHooks(
    {
      url: `${endpoint}followings`,
      method: "POST",
    },
    { manual: true }
  );

  return { data, loading, error,  executeFollowUser };
};

export default useFollowUserHooks;
