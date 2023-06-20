const Skills = () => {
  return (
    <div>
      <div></div>
      <ul>
        {skillsList.map((item) => (
          <li key={item.id} className="border my-5 p-3 rounded-lg">
            <h2 className="mb-3 text-lg font-bold">{item.title}</h2>
            <p className="text-neutral-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const skillsList = [
  {
    id: 0,
    title: "NodeJS / ExpressJS / NestJS",
    description:
      "NodeJS의 프레임워크 ExpressJS와 NestJS를 통해 백엔드 서버를 구축할 수 있으며, 계층형 아키텍처, 클린 아키텍처 기반으로 구조 설계가 가능합니다.",
  },
  {
    id: 1,
    title: "TypeScript",
    description:
      "타입스크립트를 사용하여, 기존 자바스크립트의 TypeLess한 단점들을 보완하고, 좀 더 객체지향적으로 코드를 짤 수 있습니다.",
  },
  {
    id: 2,
    title: "PostgreSQL / MySQL / MongoDB / Prisma",
    description:
      "각종 관계형/비관계형 DB를 통해 데이터베이스를 구축하고 백엔드 서버와 연동이 가능하며, 쿼리문 혹은 Prisma와 같은 ORM을 다룰 수 있습니다.",
  },
  {
    id: 3,
    title: "Jest",
    description:
      "Jest 라이브러리와 모킹을 통해 단위 테스트, 통합 테스트, E2E 테스트 등을 통해 테스트 주도 개발을 할 수 있습니다.",
  },
  {
    id: 4,
    title: "Swagger",
    description:
      "Swagger를 통해 서버 API를 문서화하여 유지보수를 용이하게 하고, 프론트엔드와의 소통에도 힘을 쓸 수 있습니다.",
  },
  {
    id: 5,
    title: "AWS",
    description:
      "AWS의 서비스등을 이용하여 클라우드 서버 혹은 데이터베이스 등을 대여하여 서비스를 배포할 수 있습니다.",
  },
  {
    id: 5,
    title: "Docker",
    description:
      "도커의 컨테이너를 통해 다양한 환경 혹은 프로덕션 환경 에서도 일관성 있는 개발/배포 환경을 구축할 수 있습니다.",
  },
  {
    id: 5,
    title: "CI/CD",
    description: "깃허브 액션 등을 통하여 서비스 배포를 자동화 할 수 있습니다.",
  },
  {
    id: 5,
    title: "프론트엔드 기술",
    description:
      "리액트 등을 이용하여 클라이언트 UI를 구성할 수 있으며, Tailwind 혹은 MUI같은 CSS 프레임워크, Zustand와 같은 상태관리 라이브러리, React-Query와 같은 서버 비동기 통신 용 라이브러리 등을 사용할 수 있습니다.",
  },
];

export default Skills;
