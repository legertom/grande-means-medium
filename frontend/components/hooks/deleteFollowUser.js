import useHooks from "axios-hooks";
import { endpoint } from "../config/config";

const useDeleteFollowUserHooks = () => {
  const [{ data, loading, error }, executeDeleteFollowUser] = useHooks(
    {
      url: `${endpoint}bookmarks`,
      method: "DELETE",
    },
    { manual: true }
  );
  let LoadinPost = loading
  return { data, LoadinPost, error, executeDeleteFollowUser };
};

export default useDeleteFollowUserHooks;
