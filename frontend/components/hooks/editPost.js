import useHooks from "axios-hooks";

import { endpoint } from "../config/config";

const useEditPostHooks = ({ id = 0 }) => {
  const [{ data, loading, error }, executePost] = useHooks(
    {
      url: `${endpoint}posts/${id}`,
      method: "PUT",
    },
    { manual: true }
  );

  return { data, loading, error, executePost };
};

export default useEditPostHooks;
