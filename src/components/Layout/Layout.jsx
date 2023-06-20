import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <button
        className="fixed bottom-5 right-5 border px-2 py-3 rounded-lg text-neutral-700 hover:bg-neutral-100"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </button>
    </>
  );
};

export default Layout;
