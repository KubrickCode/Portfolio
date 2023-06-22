import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center text-sm md:text-lg text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-row">
        {tabList.map((item) => (
          <li key={item.id}>
            <Link
              to={item.pathname}
              className={`px-5 lg:px-10 py-5 inline-block border-b-2 rounded-t-lg w-full ${
                location.pathname === item.pathname
                  ? "text-blue-600 border-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const tabList = [
  { id: 0, name: "프로필", pathname: "/" },
  { id: 2, name: "기술", pathname: "/skills" },
  { id: 3, name: "프로젝트", pathname: "/projects" },
];

export default Header;
