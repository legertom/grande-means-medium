import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useRegisterUserHooks = () => {
  const [{ data, loading, error }, executeRegisterUser] = useHooks(
    {
      url: `${endpoint}users`,
      method: "POST",
    },
    { manual: true }
  );

  return { data, loading, error, executeRegisterUser };
};

export default useRegisterUserHooks;
