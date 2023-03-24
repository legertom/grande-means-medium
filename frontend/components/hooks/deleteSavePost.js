import useHooks from "axios-hooks";
import { endpoint } from "../config/config";

const useDeleteSavePostHooks = () => {
  const [{ data, loading, error }, executeDeleteSavePost] = useHooks(
    {
      url: `${endpoint}bookmarks`,
      method: "DELETE",
    },
    { manual: true }
  );
  let LoadinPost = loading
  return { data, LoadinPost, error, executeDeleteSavePost };
};

export default useDeleteSavePostHooks;
