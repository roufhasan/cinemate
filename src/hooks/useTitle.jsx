import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Cinemate`;
  }, [title]);
};

export default useTitle;
