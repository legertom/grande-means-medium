import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetBookmarkByIDHooks = ({id=1}) => {
 
  const [{ data, loading, error }, executeGetBookmark] = useHooks(
    {
      url: `${endpoint}bookmarks/${id}`,
      method: "GET",
    },
    { manual: false }
  );

  return { data, loading, error, executeGetBookmark };
};

export default useGetBookmarkByIDHooks;
