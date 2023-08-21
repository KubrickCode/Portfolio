import ProjectListItems from "../ProjectListItems";
import SinabroReport from "./SinabroReport";

const Sinabro = ({ setModalState, setSrc }) => {
  return (
    <>
      <div>
        <button
          className="my-5 border px-2 py-1 rounded bg-blue-500 text-white hover:scale-[1.02] hover:bg-blue-600"
          onClick={() => {
            setModalState(true);
            setSrc("2차팀플.mp4");
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
        href="https://github.com/KubrickCode/Sinabro"
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
        href="http://kdt-ai7-team01.elicecoding.com/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        사이트 링크(폐쇄 예정)
      </a>
    ),
  },
  {
    id: 2,
    description: (
      <a
        href="http://kdt-ai7-team01.elicecoding.com/api/docs"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        API 문서(폐쇄 예정)
      </a>
    ),
  },
];

const about = [
  { id: 0, description: "두 번째 팀 프로젝트" },
  { id: 1, description: "멸종 위기종 데이터 분석 프로젝트" },
  {
    id: 2,
    description:
      "포인트와 컬렉션과 같은 재미요소를 이용하여 사용자의 웹 방문율을 높인 뒤 경각심을 심어 멸종 위기종에 대한 관심도를 높이려고 함",
  },
];

const features = [
  {
    id: 0,
    description:
      "포인트를 적립/소모 하는 활동 외의 대부분 기능은 비로그인 시에도 가능.",
  },
  {
    id: 1,
    description:
      "자료 탭에서 지역별 멸종위기종에 대한 분포 데이터(개체, 분포 그래프)를 지도를 클릭하여 확인할 수 있음.",
  },
  {
    id: 2,
    description:
      "자료 탭에서 추가적으로 멸종위기종에 대한 원인 데이터를 시각화 그래프와 함께 확인할 수 있음.",
  },
  {
    id: 3,
    description:
      "관리자 페이지를 통해 유저 관리, 그리고 영상, 캠페인, 동참, 소식 등 관리자 권한으로 업데이트가 필요한 컨텐츠들을 핸들링 가능.",
  },
  {
    id: 4,
    description:
      "여러가지 활동들을 통해 포인트를 적립할 수 있고, 일부 활동들은 포인트 적립에 대한 일일 제한이 있음.",
  },
  {
    id: 5,
    description:
      "포인트를 소모하여 멸종위기종 카드를 획득하여 나의 컬렉션을 채워나갈 수 있음.",
  },
  {
    id: 6,
    description:
      "이외 비밀번호 변경, 회원 탈퇴, 포인트 내역 확인 등의 기능이 있음.",
  },
];

const goals = [
  {
    id: 0,
    description:
      "이전 팀 프로젝트 때와는 다르게 기능 개발 보다는 조금 더 깊은 부분에 대해 고민하며 개발할 것",
  },
  {
    id: 1,
    description:
      "어쩔 수 없이 프론트엔드에 일부 개입할 수 밖에 없겠지만, 이번에는 최대한 백엔드에만 집중할 것",
  },
  {
    id: 2,
    description:
      "팀 프로젝트에 들어가기 전에 공부했던 객체 지향적인 방식을 팀 프로젝트의 백엔드에 적용시켜 볼 것",
  },
  {
    id: 3,
    description: "문서화, 테스트 등 기능과는 상관없을지라도 꼭 적용시켜 볼 것",
  },
  {
    id: 4,
    description:
      "feature별로 브랜치를 이동하는 전략을 준수하고, 작은 단위로 커밋을 잘 나누어서 할것.",
  },
];

const skills = [
  {
    id: 0,
    description:
      "사용된 기술 스택: TypeScript, ExpressJS, NestJS, PostgreSQL, Prisma, Swagger, Jest, Passport, JWT, React, TailwindCSS, AWS RDS",
  },
  {
    id: 1,
    description:
      "기존 여러 프로젝트를 통해 서버 구성 및 배포까지 해봤었기에, 대부분의 초기 설정 및 환경 설정을 담당함.",
  },
  {
    id: 2,
    description: "백엔드 파트는 혼자 모든 부분을 담당.",
  },
  {
    id: 3,
    description:
      "프론트엔드에서는 관리자 페이지, 자료탭과 그래프 시각화, 일부 스타일 개입, 페이지네이션 정도를 담당함.",
  },
  {
    id: 4,
    description:
      "이번에도 계층형 아키텍처를 기반으로 백엔드 구조를 설계하였고, Express와 Nest 두가지 버전으로 서버 구성.",
  },
  {
    id: 5,
    description:
      "PostgreSQL과 Prisma를 통해 DB와 리포지토리를 구성했으며, 배포 환경에서는 RDS를 사용함.",
  },
  {
    id: 6,
    description: "Express에서는 TypeDI를 통하여 의존성 주입을 구현하였음.",
  },
  {
    id: 7,
    description: "요청과 응답에 대한 DTO를 각각 따로 적용하여 관심사를 분리함.",
  },
  {
    id: 8,
    description:
      "Swagger를 통해 API 명세서를 문서화하고, 해당 문서를 프론트엔드 개발자들에게 공유함.",
  },
  {
    id: 9,
    description: "시간 관계상 테스트는 일부 E2E에 한해서만 진행함.",
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
    title: "기술 스택 및 나의 역할",
    description: <ProjectListItems list={skills} />,
  },
  {
    id: 5,
    title: "트러블 슈팅 및 성과",
    description: <SinabroReport />,
  },
];

export default Sinabro;
