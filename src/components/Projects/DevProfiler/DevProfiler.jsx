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
];

const goals = [
  {
    id: 0,
    description:
      "첫 팀 프로젝트이며, 처음으로 다른 사람들과 협업을 통해 프로젝트를 완성",
  },
  {
    id: 1,
    description:
      "팀원들, 그리고 나의 수준을 고려(모두 코딩 초보)하여 깊은 부분보다는 기능 개발에 초점",
  },
  {
    id: 2,
    description:
      "기능 개발 외에도 협업에 대한 부분(Git사용 등)을 학습하는 것 또한 목표",
  },
];

const skills = [
  {
    id: 0,
    description:
      "사용된 기술 스택: Express, React, MongoDB, Mongoose, TailwindCSS, Passport, JWT, Zustand, React-Query",
  },
  {
    id: 1,
    description:
      "기존 개인 프로젝트를 통해 서버 구성 및 배포까지 해봤었기에, 대부분의 초기 설정 및 환경 설정을 담당함.",
  },
  {
    id: 2,
    description: "포트폴리오의 필수 MVP및 추가 MVP 구현(프론트,백엔드 통합).",
  },
  {
    id: 3,
    description:
      "회원 프로필, 회원 정보 설정, 프로필 사진, 좋아요및 팔로우, 통계 데이터 등 구현 (프론트,백엔드 통합).",
  },
  {
    id: 4,
    description:
      "회원 인증 관련 로직 구현(Passport와 JWT 기반의 인증 및 미들웨어 설정).",
  },
  {
    id: 5,
    description: "프론트엔드 및 백엔드 기본 라우터 및 API 구성.",
  },
  {
    id: 6,
    description: "MongoDB Atlas 및 사진 업로드를 위한 S3 대여 후 적용.",
  },
  {
    id: 7,
    description: "AWS SES 를 통한 메일 서비스(비밀번호 찾기) 구현.",
  },
  {
    id: 8,
    description:
      "Zustand를 이용한 전역 상태 관리 스토어 및 React-Query를 이용한 서버 통신용 인스턴스 커스텀 훅 구성.",
  },
  {
    id: 9,
    description:
      "React-Query를 사용하여 실시간 통신(폴링 방식) 구현(쪽지 및 방명록).",
  },
];

const features = [
  {
    id: 0,
    description:
      "홈페이지 및 네트워크 탭을 통한 다른 유저 열람은 비로그인 시에도 가능.",
  },
  {
    id: 1,
    description:
      "로컬과 소셜방식의 로그인이 가능하고, 로그인 시 나의 포트폴리오를 제작 및 공유할 수 있음.",
  },
  {
    id: 2,
    description: "유저간 좋아요, 팔로우 등의 소셜 기능이 가능.",
  },
  {
    id: 3,
    description:
      "다른 유저의 페이지에서 쪽지, 방명록 등을 남길 수 있고, 해당 유저는 실시간으로 확인 가능.",
  },
  {
    id: 4,
    description:
      "포트폴리오 작성만으로는 부족한 정보들에 대해 미니블로깅 서비스를 통해 간단한 글 게시 가능및 다른 유저 열람 가능.",
  },
  {
    id: 5,
    description:
      "학력, 경력 등 각종 MVP에 대하여 원하는 항목들만 골라서 열람할 수 있도록 커스터마이징 가능.",
  },
  {
    id: 6,
    description:
      "네트워크 탭을 통해 다른 유저의 페이지로 갈 수 있고, 팔로우 수에 따라 랭킹 표시.",
  },
  {
    id: 7,
    description: "이름, 한줄 소개, 프로필 사진 등 회원 프로필 수정 가능.",
  },
  {
    id: 8,
    description: "비밀번호, 회원탈퇴 등 회원정보 수정 가능.",
  },
  {
    id: 9,
    description:
      "나를 팔로우한 유저 및 내가 팔로우한 유저 확인 및 언팔로우 가능.",
  },
  {
    id: 10,
    description: "팔로우, 좋아요, 방문자 수에 대한 통계 데이터 열람 가능.",
  },
  {
    id: 11,
    description: "비밀번호 찾기 용도 메일 서비스 이용 가능.",
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
    title: "기술 스택 및 나의 역할",
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
