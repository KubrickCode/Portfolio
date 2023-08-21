import ProjectListItems from "../ProjectListItems";
import KcvocaReport from "./KcvocaReport";

const Kcvoca = ({ setModalState, setSrc }) => {
  return (
    <>
      <div>
        <button
          className="my-5 border px-2 py-1 rounded bg-blue-500 text-white hover:scale-[1.02] hover:bg-blue-600"
          onClick={() => {
            setModalState(true);
            setSrc("kv영상.mp4");
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
        href="https://github.com/KubrickCode/KC-VOCA"
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
        href="https://kcvoca.duckdns.org/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        사이트 링크
      </a>
    ),
  },
];

const about = [
  { id: 0, description: "첫 번째 개인 프로젝트" },
  { id: 1, description: "단어장 웹 사이트" },
  { id: 2, description: "폴더 구조를 통해 단어장을 관리하는 시스템" },
  { id: 3, description: "나만의 단어장을 생성하고, 다양한 방식으로 학습 가능" },
];

const features = [
  {
    id: 0,
    description:
      "기본적으로 로그인해야 서비스 이용이 가능하고, 로컬과 소셜 방식의 로그인 가능.",
  },
  {
    id: 1,
    description:
      "폴더와 단어장을 생성 가능하고, 상속 관계를 가질 수 있어서 효율적으로 정리 가능.",
  },
  {
    id: 2,
    description: "폴더 및 단어장은 모두 이름 수정, 삭제, 위치 이동 가능.",
  },
  {
    id: 3,
    description:
      "최근에 본 단어장을 기본적으로 볼 수 있고, 즐겨찾기 단어장 또한 설정 가능.",
  },
  {
    id: 4,
    description:
      "단어장 공유 기능을 통해 내 단어장을 다른 유저들에게 공유할 수 있고, 다른 유저들의 공유 단어장 또한 열람 가능.",
  },
  {
    id: 5,
    description:
      "단어장 내에서 단어, 단어 뜻, 예문, 예문 뜻 등을 저장할 수 있고, 단어 외에는 필수 저장 필드는 아니고, 수정 및 삭제 가능.",
  },
  {
    id: 6,
    description:
      "영어로 된 단어 및 예문은 TTS 서비스를 통해 원어민 발음을 들을 수 있음.",
  },
  {
    id: 7,
    description:
      "학습이 완료된 단어들은 학습 완료를 통해 따로 관리 가능하고, 학습 완료 또한 취소 가능.",
  },
  {
    id: 8,
    description:
      "공부 모드에서는 각종 필드를 숨기거나 보이게 할 수 있고, 반복 버튼을 통해 쉐도잉 훈련 가능.",
  },
  {
    id: 9,
    description:
      "이외에 다크 모드, 비밀번호 변경, 닉네임 변경, 회원 탈퇴, 비밀번호 찾기(이메일 서비스) 등 가능.",
  },
];

const goals = [
  {
    id: 0,
    description: "HTML, CSS, 자바스크립트 학습 및 적용",
  },
  {
    id: 1,
    description: "NodeJS공부 및 백엔드 서버 구축",
  },
  {
    id: 2,
    description: "MySQL 백엔드 연결 및 기본적인 CRUD 적용",
  },
  {
    id: 3,
    description: "AWS를 통한 배포 및 24시간 구동되는 서버 구축",
  },
  {
    id: 4,
    description: "새로운 기술을 접목할 때마다 꾸준한 업데이트 및 마이그레이션",
  },
];

const skills = [
  {
    id: 0,
    description:
      "백엔드는 Express, (추가)프론트엔드는 React, DB는 MySQL, 배포시에는 AWS의 EC2와 RDS 이용",
  },
  {
    id: 1,
    description:
      "ORM 없이 간단한 mysql2를 이용하여 쿼리문 위주로 리포지토리 구성",
  },
  { id: 2, description: "추가적으로 AWS-Polly, Zustand, React-Query 등 사용" },
  { id: 3, description: "(추가)스타일은 MUI 기반" },
  {
    id: 4,
    description: "(추가)타입스크립트 사용, Passport와 JWT토큰 기반 인증",
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
    description: <KcvocaReport />,
  },
];

export default Kcvoca;
