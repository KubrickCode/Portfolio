import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex justify-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-row">
        {tabList.map((item) => (
          <li key={item.id}>
            <Link
              to={item.link}
              onClick={() => setTab(item.id)}
              className={`px-10 py-5 inline-block border-b-2 rounded-t-lg w-full ${
                tab === item.id
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
  { id: 0, name: "프로필", link: "" },
  { id: 1, name: "소개", link: "about" },
  { id: 2, name: "기술", link: "skills" },
  { id: 3, name: "프로젝트", link: "projects" },
];

export default Header;
