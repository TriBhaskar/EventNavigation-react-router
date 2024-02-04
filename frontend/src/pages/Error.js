import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation /> {/* Render the MainNavigation component */}
      <main>
        <PageContent title="An error occurred!">
          <p>Something went wrong!</p>
        </PageContent>
      </main>
    </>
  );
}
