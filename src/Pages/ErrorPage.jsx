import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/images/pagenotfound.png";
import Button from "../components/Button/Button";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error!");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImg}
              alt="404 page not found"
            />
          </div>
          <div className="my-4">
            <Link to="/">
              <Button>Back To Cinemate</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
