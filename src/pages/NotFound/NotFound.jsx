import { Link } from "react-router-dom";
import "./NotFound.css";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>FeedTheHunger | 404 page</title>
      </Helmet>
      <div className="bg-emerald-200 notFound h-[100vh]">
        <div className="container mx-auto p-10">
          <Link className="underline" to={"/"}>
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
