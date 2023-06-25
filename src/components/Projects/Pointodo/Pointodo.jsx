import ProjectListItems from "../ProjectListItems";
import PointodoReport from "./PointodoReport";

const Pointodo = () => {
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
  { id: 0, description: "세 번째 개인 프로젝트" },
  { id: 1, description: "투두 리스트 웹사이트" },
  { id: 2, description: "할 일 정리 및 포인트 시스템" },
];

const goals = [
  {
    id: 0,
    description:
      "원래는 이전 개인 프로젝트들을 계속 고쳐나가볼 생각이었으나, 이전 팀 프로젝트에서 포인트 시스템이라는 것에 대한 더욱 깊은 공부가 필요함을 느끼고 간단하게나마 포인트를 적용시켜볼 만한 개인 프로젝트를 통해 깊게 공부해 보기로 마음먹음",
  },
  {
    id: 1,
    description:
      "단순 계층형 아키텍처가 아닌, 클린 아키텍처에 대한 공부 및 적용",
  },
  {
    id: 2,
    description:
      "DB의 인덱스, 트랜잭션에 대해 더욱 깊게 공부하고, 성능 테스트를 통해 성능 개선까지 하는 것이 목표",
  },
  {
    id: 3,
    description:
      "동시성, 무결성 등 일어날 수 있는 다양한 문제들에 대한 해결이 목표",
  },
  {
    id: 4,
    description: "도커 및 배포 자동화에 대한 공부 및 적용",
  },
  {
    id: 5,
    description:
      "이외 그동안 두루뭉술하게 다뤄왔던 부분들을 최대한 현업의 상황에 맞게 고려하여 적용",
  },
];

const skills = [
  { id: 0, description: "NestJS" },
  { id: 1, description: "React" },
  { id: 2, description: "AWS EC2" },
  { id: 3, description: "AWS RDS" },
  { id: 4, description: "Docker" },
  { id: 5, description: "Github Action" },
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
      "작업을 완료할 때마다 포인트를 얻을 수 있고, 중요도에 따라 포인트를 다르게 얻을 수 있음.",
  },
  {
    id: 2,
    description:
      "연속성 유지 시(매일 최소 하나의 작업) 보너스 포인트 획득 가능.",
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
    title: "목표",
    description: <ProjectListItems list={goals} />,
  },
  {
    id: 2,
    title: "기술 스택",
    description: <ProjectListItems list={skills} />,
  },
  {
    id: 3,
    title: "주요 기능",
    description: <ProjectListItems list={features} />,
  },
  {
    id: 4,
    title: "회고",
    description: <PointodoReport />,
  },
];

export default Pointodo;
