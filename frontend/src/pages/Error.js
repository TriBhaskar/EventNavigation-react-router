import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError(); // useRouteError() returns the error object

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message; // with json() helper function we can directly access the message property (no need to parse JSON string to object first)
  }

  if (error.status === 422) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found!";
    message = "Could not find resource or page!";
  }
  return (
    <>
      <MainNavigation /> {/* Render the MainNavigation component */}
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
}
