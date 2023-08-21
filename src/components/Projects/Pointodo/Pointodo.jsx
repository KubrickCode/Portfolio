import ProjectListItems from "../ProjectListItems";
import PointodoReport from "./PointodoReport";

const Pointodo = ({ setModalState, setSrc }) => {
  return (
    <>
      <div>
        <button
          className="my-5 border px-2 py-1 rounded bg-blue-500 text-white hover:scale-[1.02] hover:bg-blue-600"
          onClick={() => {
            setModalState(true);
            setSrc("Pointodo영상.mp4");
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

const refLinks = [
  {
    id: 0,
    description: (
      <a
        href="https://pointodo.duckdns.org"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        사이트 링크
      </a>
    ),
  },
  {
    id: 1,
    description: (
      <a
        href="https://kubrickcode.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%8C%EA%B3%A0/POINTODO%28%ED%95%A0%20%EC%9D%BC%20%EC%A0%95%EB%A6%AC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%29"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        Pointodo 일지 블로그 글 모음
      </a>
    ),
  },
  {
    id: 2,
    description: (
      <a
        href="https://pointodo.duckdns.org/api/docs"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        API 문서
      </a>
    ),
  },
  {
    id: 3,
    description: (
      <a
        href="https://github.com/KubrickCode/Pointodo-BE"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        깃허브 백엔드
      </a>
    ),
  },
  {
    id: 3,
    description: (
      <a
        href="https://github.com/KubrickCode/Pointodo-FE"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        깃허브 프론트엔드
      </a>
    ),
  },
];

const about = [
  { id: 0, description: "세 번째 개인 프로젝트" },
  { id: 1, description: "투두 리스트 웹사이트" },
  { id: 2, description: "할 일 정리 및 포인트, 뱃지 시스템" },
  {
    id: 3,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/1-Pointodo-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EC%9A%94-%EA%B8%B0%ED%9A%8D-%EC%9D%98%EB%8F%84-%EB%AA%A9%ED%91%9C-%EC%82%AC%EC%9A%A9-%EA%B8%B0%EC%88%A0"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        블로그 글 - (1) Pointodo 서비스 개요, 기획 의도, 목표, 사용 기술, ERD
      </a>
    ),
  },
];

const features = [
  {
    id: 0,
    description:
      "기본적으로 로그인해야 시스템 이용이 가능하고, 할 일 목록을 만들 수 있음.",
  },
  {
    id: 1,
    description: "로컬 및 소셜 로그인 가능.",
  },
  {
    id: 2,
    description: "작업 유형 선택 가능(매일 작업, 기한 작업, 무기한 작업)",
  },
  {
    id: 3,
    description: "각종 트리거를 통해 목표 달성 시 특정 뱃지 획득 가능",
  },
  {
    id: 4,
    description:
      "작업을 완료할 때마다 포인트를 얻을 수 있고, 중요도에 따라 포인트를 다르게 얻을 수 있고, 포인트를 소모하여 특정 뱃지 구매 가능.",
  },
  {
    id: 5,
    description:
      "연속성 유지 시(매일 최소 하나의 작업) 보너스 포인트 획득 가능.",
  },
];

const goals = [
  {
    id: 0,
    description:
      "도커, 깃허브 액션, 배포 테스트 등을 통해 배포 과정을 자동화 시키는 것",
  },
  {
    id: 1,
    description:
      "이전 프로젝트들에서 항상 아쉬웠던 의존 관계를 역전 시켜서 클린 코드 기반의 새로운 계층형 아키텍처를 구축하는 것",
  },
  {
    id: 2,
    description:
      "관계형 DB에서의 트랜잭션과 락 등을 깊게 공부하고 설계하여 동시성 문제를 해결할 것",
  },
  {
    id: 3,
    description:
      "관계형 DB에서의 인덱스에 대해 더 깊게 공부하고, 실행 계획 등을 통해 쿼리 성능을 개선해 나갈 것",
  },
  {
    id: 4,
    description:
      "각종 테스트 구축과 배포 과정에서의 테스트 자동화를 통해 코드를 유지 보수 할 것",
  },
  {
    id: 5,
    description:
      "기존에 사용하지 않던 로깅, 캐싱 등을 프로젝트에 접목시켜볼 것",
  },
];

const skills = [
  { id: 0, description: "NestJS" },
  { id: 1, description: "React" },
  { id: 2, description: "PostgreSQL" },
  { id: 3, description: "Redis" },
  { id: 4, description: "AWS EC2, RDS, S3" },
  { id: 5, description: "Docker, Github Action, Vercel" },
  { id: 6, description: "Prisma, Jest, Swagger, Winston, JMeter 등" },
];

const articleList = [
  {
    id: 0,
    title: "관련 링크",
    description: <ProjectListItems list={refLinks} />,
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
    description: <PointodoReport />,
  },
];

export default Pointodo;
