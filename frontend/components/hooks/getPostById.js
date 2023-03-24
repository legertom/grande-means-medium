import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useGetPostByIDHooks = ({id=1}) => {

  const [{ data, loading, error }, executeGetPost] = useHooks(
    {
      url: `${endpoint}posts/${id}`,
      method: "GET",
    },
    { manual: false }
  );

  return { data, loading, error, executeGetPost };
};

export default useGetPostByIDHooks;
