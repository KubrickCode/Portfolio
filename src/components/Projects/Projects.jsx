import { useState } from "react";
import DevProfiler from "./DevProfiler/DevProfiler";
import Pointodo from "./Pointodo/Pointodo";
import Sinabro from "./Sinabro/Sinabro";
import Folioverse from "./Folioverse/Folioverse";
import Kcvoca from "./Kcvoca/Kcvoca";

const Projects = () => {
  const [open, setOpen] = useState(Array(5).fill(false));

  return (
    <>
      <ul>
        {projectsList.map((item, index) => (
          <li
            key={item.id}
            className="border my-2 p-5 rounded-lg transition-all hover:scale-[1.01]"
          >
            <div
              className="cursor-pointer flex flex-row justify-between"
              onClick={() => {
                const newOpen = [...open];
                newOpen[index] = !newOpen[index];
                setOpen(newOpen);
              }}
            >
              <div>
                <span className="mr-2">[{item.provider}]</span>
                <span>{item.description}</span>
              </div>
              <span
                className={`transition-transform ${
                  open[index] && "rotate-180"
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open[index] ? "max-h-[5000px]" : "max-h-0"
              }`}
            >
              {item.component}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const projectsList = [
  {
    id: 0,
    provider: "개인★",
    description: "POINTODO(투두 리스트 웹사이트) - 2023/06/21 ~ 현재 진행중",
    component: <Pointodo />,
  },
  {
    id: 1,
    provider: "팀플",
    description:
      "시나브로(멸종 위기종 데이터 분석 웹사이트) - 2023/05/29 ~ 2023/06/16",
    component: <Sinabro />,
  },
  {
    id: 2,
    provider: "개인",
    description:
      "DevProfiler(웹 개발자 역량 테스트 웹사이트) - 2023/05/15 ~ 2023/05/25",
    component: <DevProfiler />,
  },
  {
    id: 3,
    provider: "팀플",
    description:
      "Folioverse(포트폴리오 제작 및 공유 웹사이트) - 최우수상 - 2023/04/24 ~ 2023/05/05",
    component: <Folioverse />,
  },
  {
    id: 4,
    provider: "개인",
    description: "KCVOCA(단어장 웹사이트) - 2023/02/01 ~ 2023/04/22",
    component: <Kcvoca />,
  },
];

export default Projects;
