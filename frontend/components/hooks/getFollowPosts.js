import useHooks from "axios-hooks";

import { endpoint } from "../config/config";
let dataArray = null
const useGetFollowPostHooks = ({manual=false}) => {
  
  const [{ data, loading, error }, executeGetFollowPost] = useHooks(
    {
      url: `${endpoint}users`,
      method: "GET",
    },
    { manual }
  );
  let LoadinFollowPost = loading
  var followPost = data

  return { followPost, LoadinFollowPost, error, executeGetFollowPost };
};

export default useGetFollowPostHooks;
