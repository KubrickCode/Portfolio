import ProjectListItems from "../ProjectListItems";
import KcvocaReport from "./KcvocaReport";

const Kcvoca = () => {
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
  { id: 0, description: "첫 번째 개인 프로젝트" },
  { id: 1, description: "단어장 웹 사이트" },
  { id: 2, description: "폴더 구조를 통해 단어장을 관리하는 시스템" },
  { id: 3, description: "나만의 단어장을 생성하고, 다양한 방식으로 학습 가능" },
];

const goals = [
  {
    id: 0,
    description:
      "첫 개인 프로젝트이며, 처음으로 기획, 개발, 배포를 스스로 해봄",
  },
  {
    id: 1,
    description:
      "완벽하게 해낼 수는 없겠지만, 다양한 기술에 대해 얕고 넓게 공부 하는 것이 목표",
  },
  {
    id: 2,
    description: "깊은 부분을 다루지는 못하더라도 핵심적인 기능 개발에 초점",
  },
  {
    id: 3,
    description:
      "의미가 남다른 프로젝트이기에, 가능하다면 계속해서 업데이트 및 마이그레이션 진행 예정",
  },
];

const skills = [
  {
    id: 0,
    description:
      "백엔드는 Express, (추가)프론트엔드는 React, DB는 MySQL, 배포시에는 AWS의 EC2와 RDS 이용",
  },
  { id: 1, description: "ORM 없이 간단한 쿼리문 위주로 리포지토리 구성" },
  { id: 1, description: "(추가)스타일은 MUI 기반" },
  { id: 1, description: "타입스크립트 사용, Passport와 JWT토큰 기반 인증" },
  { id: 1, description: "추가적으로 AWS-Polly, Zustand, React-Query 등 사용" },
];

const features = [
  {
    id: 0,
    description:
      "기본적으로 로그인해야 시스템 이용이 가능하고, 날짜 별로 할 일 목록을 만들 수 있음.",
  },
  {
    id: 1,
    description:
      "작업을 완료할 때 마다 포인트를 얻을 수 있고, 중요도에 따라 포인트를 다르게 얻을 수 있음.",
  },
  {
    id: 2,
    description:
      "연속성 유지시(매일 최소 하나의 작업) 보너스 포인트 획득 가능.",
  },
];

const articleList = [
  {
    id: 0,
    title: "개요",
    description: <ProjectListItems list={about} />,
  },
  {
    id: 0,
    title: "목표",
    description: <ProjectListItems list={goals} />,
  },
  {
    id: 0,
    title: "주요 기능",
    description: <ProjectListItems list={skills} />,
  },
  {
    id: 0,
    title: "기술 스택",
    description: <ProjectListItems list={features} />,
  },
  {
    id: 0,
    title: "회고",
    description: <KcvocaReport />,
  },
];

export default Kcvoca;
