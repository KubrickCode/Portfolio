import ProjectListItems from "../ProjectListItems";
import DevProfilerReport from "./DevProfilerReport";

const DevProfiler = () => {
  return (
    <>
      <div>
        <ul>
          {articleList.map((item) => (
            <li key={item.id}>
              <h2 className="my-5 text-xl">{item.title}</h2>
              <div className="text-neutral-600">{item.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const about = [
  { id: 0, description: "두 번째 개인 프로젝트" },
  { id: 1, description: "웹 개발자 역량 테스트 웹사이트" },
  {
    id: 2,
    description:
      "간단한 설문조사를 통해 웹 개발자로서의 역량을 테스트할 수 있음",
  },
  {
    id: 3,
    description: "검사 결과를 계정별로 저장 가능",
  },
  {
    id: 4,
    description: <video src="dp영상.mp4" controls />,
  },
];

const links = [
  {
    id: 0,
    description: (
      <a
        href="https://github.com/KubrickCode/DevProfiler"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        깃허브 주소
      </a>
    ),
  },
  {
    id: 1,
    description: (
      <a
        href="https://devprofiler.duckdns.org/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        배포 링크
      </a>
    ),
  },
  {
    id: 2,
    description: (
      <a
        href="https://devprofiler.duckdns.org/api/docs"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        API 문서
      </a>
    ),
  },
];

const goals = [
  {
    id: 0,
    description:
      "두 번째 개인 프로젝트이며, 백엔드에서의 객체 지향적인 프로그래밍을 공부하기 위해 굉장히 간단한 기획으로 빠르게 만드는 것이 목표.",
  },
  {
    id: 1,
    description:
      "아무래도 기능적인 부분보다는 아키텍처적인 부분에 대한 공부가 목적이기에, 복잡한 로직은 구성하지 않음.",
  },
  {
    id: 2,
    description:
      "좀 더 깔끔한 방식의 계층형 아키텍처를 우선적으로 공부하는 것이 목표.",
  },
  {
    id: 3,
    description:
      "NestJS에 대한 학습 또한 목표에 있기 때문에, 계층형 아키텍처로 구성된 Express서버 외에도 NestJS 서버를 추가적으로 개발하는 것이 목표.",
  },
  {
    id: 4,
    description:
      "여태 API 명세에 대한 문서화가 전혀 없었는데, 협업 과정에서 특히나 필요함을 느꼈으므로 Swagger에 대한 학습 또한 목표.",
  },
  {
    id: 5,
    description:
      "추가적으로 테스트 주도 개발에 대한 중요성은 두루뭉술하게 들어만 왔지, 정확히 어떻게 하는지 혹은 어떠한 이점을 가지는지에 대해 모르고 있었으므로, 일단 무작정 테스트를 적용해 보는 것 또한 목표.",
  },
];

const skills = [
  {
    id: 0,
    description:
      "사용된 기술 스택: TypeScript, ExpressJS, NestJS, PostgreSQL, Prisma, Swagger, Jest, Passport, JWT, React, TailwindCSS, Zustand, React-Query",
  },
];

const features = [
  {
    id: 0,
    description:
      "기본적인 역량 검사를 위한 설문 조사는 비로그인 시에도 누구나 가능.",
  },
  {
    id: 1,
    description:
      "로컬과 소셜 방식의 로그인이 가능하고, 역량 검사 결과를 저장할 수 있음.",
  },
  {
    id: 2,
    description:
      "추가적으로 역량 검사 데이터 덮어쓰기, 삭제, 회원정보 변경, 탈퇴, 다크 모드 등 구현.",
  },
];

const articleList = [
  {
    id: 0,
    title: "개요",
    description: <ProjectListItems list={about} />,
  },
  {
    id: 1,
    title: "링크",
    description: <ProjectListItems list={links} />,
  },
  {
    id: 2,
    title: "목표",
    description: <ProjectListItems list={goals} />,
  },
  {
    id: 3,
    title: "기술 스택",
    description: <ProjectListItems list={skills} />,
  },
  {
    id: 4,
    title: "주요 기능",
    description: <ProjectListItems list={features} />,
  },
  {
    id: 5,
    title: "회고",
    description: <DevProfilerReport />,
  },
];

export default DevProfiler;
