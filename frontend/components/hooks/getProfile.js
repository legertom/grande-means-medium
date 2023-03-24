import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetProfileHooks = ({manual=true , id= 0}) => {
  
  const [{ data, loading, error }, executeGetProfile] = useHooks(
    {
      url: `${endpoint}profiles/${id}`,
      method: "GET",
    },
    { manual }
  );
  let LoadinPost = loading
  let ProfileData = data
  return { ProfileData, LoadinPost, error, executeGetProfile };
};

export default useGetProfileHooks;
