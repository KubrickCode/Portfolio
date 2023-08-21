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
      "NodeJS의 프레임워크 ExpressJS와 NestJS를 통해 백엔드 서버를 구축할 수 있으며, 클린 아키텍처를 지향합니다.",
  },
  {
    id: 1,
    title: "TypeScript",
    description:
      "타입스크립트를 사용하여, 기존 자바스크립트의 단점들을 보완하고, 이를 통해 좀 더 객체 지향적인 코드를 지향합니다.",
  },
  {
    id: 2,
    title: "PostgreSQL / MySQL / Prisma",
    description:
      "RDBMS를 통해 데이터베이스를 구축하고 백엔드 서버와 연동이 가능하며, SQL 원시 쿼리문과 Prisma와 같은 ORM을 다룰 수 있고, 실행 계획을 통해 쿼리 성능을 분석합니다.",
  },
  {
    id: 3,
    title: "Jest / JMeter",
    description:
      "Jest를 통해 단위 테스트, 통합 테스트, E2E 테스트 코드를 구축 가능하며, JMeter를 통해 부하 테스트를 진행합니다.",
  },
  {
    id: 4,
    title: "Swagger",
    description:
      "Swagger를 통해 서버 API를 문서화하여 유지보수를 용이하게 하고, 이를 통해 다른 직군과의 원활한 소통을 지향합니다.",
  },
  {
    id: 5,
    title: "AWS",
    description:
      "AWS의 EC2, RDS, S3 등의 서비스들을 이용하여 클라우드 서버 혹은 데이터베이스 등을 대여하여 서비스를 구축할 수 있습니다.",
  },
  {
    id: 6,
    title: "Docker",
    description:
      "도커의 컨테이너를 통해 다양한 환경 혹은 프로덕션 환경 에서도 일관성 있는 개발/배포 환경을 구축할 수 있습니다.",
  },
  {
    id: 7,
    title: "Git / GitHub / GitHub Action",
    description:
      "깃과 깃허브를 통해 버전과 코드를 관리하며, 깃허브 액션의 파이프라인을 통하여 서비스 배포를 자동화 할 수 있습니다.",
  },
  {
    id: 8,
    title: "프론트엔드 기술",
    description:
      "리액트 혹은 HTML, 바닐라 자바스크립트, CSS등을 이용하여 클라이언트 UI를 구성할 수 있으며, Tailwind 혹은 MUI와같은 CSS 프레임워크, Zustand와 같은 상태관리 라이브러리, React-Query와 같은 서버 비동기 통신용 라이브러리 등을 사용할 수 있습니다.",
  },
];

export default Skills;
