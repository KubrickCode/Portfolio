import ProjectListItems from "../ProjectListItems";
import DevProfilerReport from "./DevProfilerReport";

const DevProfiler = ({ setModalState, setSrc }) => {
  return (
    <>
      <div>
        <button
          className="my-5 border px-2 py-1 rounded bg-blue-500 text-white hover:scale-[1.02] hover:bg-blue-600"
          onClick={() => {
            setModalState(true);
            setSrc("dp영상.mp4");
          }}
        >
          사이트 영상 보기
        </button>
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
        사이트 링크
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

const goals = [
  {
    id: 0,
    description: "NestJS에 대한 공부 및 도입",
  },
  {
    id: 1,
    description:
      "NestJS와 ExpressJS 동일한 기능을 하는 두 가지 버전의 서버 구축",
  },
  {
    id: 2,
    description:
      "컨트롤러, 서비스, 리포지토리로 관심사 분리가 된 계층형 아키텍처 구축",
  },
  {
    id: 3,
    description: "Swagger를 통한 문서화",
  },
  {
    id: 4,
    description: "Jest를 통한 테스트 코드 구축",
  },
  {
    id: 5,
    description: "계층 간 의존성 주입",
  },
  {
    id: 6,
    description: "DTO를 적용한 계층 간 메시지 전달",
  },
];

const skills = [
  {
    id: 0,
    description:
      "사용된 기술 스택: TypeScript, ExpressJS, NestJS, PostgreSQL, Prisma, Swagger, Jest, Passport, JWT, React, TailwindCSS, Zustand, React-Query",
  },
];

const articleList = [
  {
    id: 0,
    title: "관련 링크",
    description: <ProjectListItems list={links} />,
  },
  {
    id: 1,
    title: "개요",
    description: <ProjectListItems list={about} />,
  },
  {
    id: 2,
    title: "주요 기능",
    description: <ProjectListItems list={features} />,
  },
  {
    id: 3,
    title: "목표",
    description: <ProjectListItems list={goals} />,
  },
  {
    id: 4,
    title: "기술 스택",
    description: <ProjectListItems list={skills} />,
  },
  {
    id: 5,
    title: "트러블 슈팅 및 성과",
    description: <DevProfilerReport />,
  },
];

export default DevProfiler;
