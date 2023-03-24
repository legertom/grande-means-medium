import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useLoginUserHooks = () => {
  const [{ data, loading, error }, executeLoginUser] = useHooks(
    {
      url: `${endpoint}session`,
      method: "POST",
    },
    { manual: true }
  );

  return { data, loading, error, executeLoginUser };
};

export default useLoginUserHooks;
