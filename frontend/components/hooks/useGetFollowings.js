import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetFollowHooks = () => {
  const [{ data, loading, error }, executeGetFollow] = useHooks(
    {
      url: `${endpoint}followings`,
      method: "Get",
    },
    { manual: true }
  );
  let getFollow = data
  return { getFollow, loading, error,   executeGetFollow };
};

export default useGetFollowHooks ;
