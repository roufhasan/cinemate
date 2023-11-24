import { useEffect } from "react";

const useSearchTitle = (searchTitle) => {
  useEffect(() => {
    document.title = `Search results for ${searchTitle}`;
  }, [searchTitle]);
};

export default useSearchTitle;
