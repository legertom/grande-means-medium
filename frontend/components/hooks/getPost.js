import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetPostHooks = ({manual=false}) => {
  
  const [{ data, loading, error }, executeGetPost] = useHooks(
    {
      url: `${endpoint}posts`,
      method: "GET",
    },
    { manual }
  );
  let LoadinPost = loading
 
  let titleData = data?.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.title === value.title
  ))
)

  return { titleData, LoadinPost, error, executeGetPost };
};

export default useGetPostHooks;
