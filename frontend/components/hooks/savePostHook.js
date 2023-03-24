import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useSavePostHooks = () => {
  const [{ data, loading, error }, executeSavePost] = useHooks(
    {
      url: `${endpoint}bookmarks`,
      method: "POST",
    },
    { manual: true }
  );

  return { data, loading, error, executeSavePost };
};

export default useSavePostHooks;
