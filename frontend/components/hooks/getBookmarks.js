import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetPostHooks = () => {

  const [{ data, loading, error }, executeGetPost] = useHooks(
    {
      url: `${endpoint}user_bookmarks`,
      method: "POST",
    },
    { manual: true}
  );
  let LoadinPost = loading
  return { data, LoadinPost, error, executeGetPost };
};

export default useGetPostHooks;
