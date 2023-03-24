import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const usePostHooks = () => {
  const [{ data, loading, error }, executePost] = useHooks(
    {
      url: `${endpoint}posts`,
      method: "POST",
    },
    { manual: true }
  );

  return { data, loading, error, executePost };
};

export default usePostHooks;
