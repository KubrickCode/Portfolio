const PointodoReport = () => {
  return (
    <>
      <div>
        {reportList.map((item) => (
          <div key={item.id} className="my-4">
            {item.description}
          </div>
        ))}
      </div>
    </>
  );
};

const reportList = [
  {
    id: 0,
    description: <h3 className="text-lg">1. 배포 및 테스트 자동화</h3>,
  },
  {
    id: 1,
    description:
      "그동안 미뤄만 왔던 배포를 자동화 시키기 위해서 어떤 방법을 쓸지 많이 고민하다가, 최종적으로 Docker, GitHub Action 등을 사용하여 EC2에 배포하고, 추가적으로 프론트엔드는 Vercel에 배포하기로 하였습니다.",
  },
  {
    id: 2,
    description:
      "프론트엔드의 경우 기본적으로 Vercel을 통해 자동적으로 배포가 되지만, 커스텀 도메인과 HTTPS를 사용하기 위해 EC2 내에 Nginx와 LetsEncrypt를 이용해 서버를 구성하고, Vercel의 도메인을 리버스 프록시로 우회하였습니다.",
  },
  {
    id: 3,
    description:
      "백엔드의 경우 기본적으로 도커파일을 통해 프로젝트를 빌드하고 PM2로 구동되도록 하였는데, 깃허브 액션의 파이프라인을 통해 도커파일을 도커허브에 Push하고(이 과정에서 테스트를 거침), EC2내에 자동으로 접속하여 이미지를 Pull 받아서 컨테이너 내에 서버를 구동시키고, EC2의 localhost:3000 에 연결시킵니다.",
  },
  {
    id: 4,
    description:
      "최종적으로 Nginx의 리버스 프록시를 통해 /api 경로의 경우 localhost:3000으로 우회되도록 해서 클라이언트와 서버를 연결해주고, 이제는 main 브랜치에 코드가 병합될 때마다 이 모든 작업이 자동으로 이루어집니다.",
  },
  {
    id: 5,
    description:
      "추가적으로 dev브랜치와 main브랜치에 Pull Request가 일어날 때 마다 자동적으로 테스트가 진행되도록 파이프라인 또한 구축하였습니다.",
  },
  {
    id: 6,
    description:
      "모든 과정은 블로그에 상세히 작성하였으니 다음 링크에서 확인 가능합니다.",
  },
  {
    id: 7,
    description: (
      <a
        href="https://kubrickcode.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%8C%EA%B3%A0/POINTODO%28%ED%95%A0%20%EC%9D%BC%20%EC%A0%95%EB%A6%AC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%29"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (2) Pointodo 배포 및 배포 자동화 과정(AWS EC2, RDS, Docker, GitHub
        Action, Vercel, Nginx)
      </a>
    ),
  },
  {
    id: 8,
    description: (
      <h3 className="text-lg">2. DIP를 적용한 클린 계층형 아키텍처</h3>
    ),
  },
  {
    id: 9,
    description:
      "기존 프로젝트들에서 계층형 아키텍처를 적용하면서도, DB와 같은 영속성 계층에 모든 서비스가 강하게 의존했기 때문에, 개발 환경에서 조차도 리포지토리 코드에 문제가 생기면 모든 계층을 수정해야되는 불상사가 생깁니다.",
  },
  {
    id: 10,
    description:
      "새로 적용시킨 아키텍처는 단순 3계층 구조가 아닌, 애플리케이션, 인터페이스, 인프라 계층이 도메인 계층에 정의해놓은 비즈니스 규칙에만 의존하는 도메인 중심의 개발이 이루어집니다.",
  },
  {
    id: 11,
    description:
      "이로 인해 각 계층의 서비스들은 다른 계층에 영향을 받지 않으며 그 자체만으로도 하나의 서비스가 될 수 있고, 특히 영속성 계층에 문제가 생겨도 다른 코드들은 영향을 받지 않게 됩니다.",
  },
  {
    id: 12,
    description:
      "이외에도 관심사 분리, 비즈니스 중심 개발, 확장성 및 유지보수, 테스트 편의성, 재사용성 등 여러가지 이점을 가지게 됩니다.",
  },
  {
    id: 13,
    description:
      "모든 과정은 블로그에 상세히 작성하였으니 다음 링크에서 확인 가능합니다.",
  },
  {
    id: 14,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/3-Pointodo-%ED%81%B4%EB%A6%B0-%EA%B3%84%EC%B8%B5%ED%98%95-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%84%A4%EA%B3%84NestJS-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%A4%91%EC%8B%AC"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (3) Pointodo 클린 계층형 아키텍처 설계(NestJS, 도메인 중심, DIP)
      </a>
    ),
  },
  {
    id: 15,
    description: <h3 className="text-lg">3. DB 인덱스 설계 및 실행 계획</h3>,
  },
  {
    id: 16,
    description:
      "프로젝트 특성상 꽤 많은 데이터베이스 읽기 작업이 일어나게 되는데, 인덱스를 사용하지 않는다면 성능적으로 굉장한 문제가 발생합니다.",
  },
  {
    id: 17,
    description:
      "적절한 인덱스 설계를 하기 위해서 실행 계획을 통해 읽기 작업에 대한 쿼리들을 분석하여, 어떤 부분에서 인덱스가 제대로 적용되는지 안되는지를 판단하고 쿼리 및 인덱싱을 개선하였습니다.",
  },
  {
    id: 18,
    description:
      "추가적으로 실행계획을 통해 테이블의 정규화 및 비정규화에 대해 고려하게 되었고, 이를 통해 테이블 구조 또한 개선하게 되었습니다.",
  },
  {
    id: 19,
    description:
      "모든 과정은 블로그에 상세히 작성하였으니 다음 링크에서 확인 가능합니다.",
  },
  {
    id: 20,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/4-Pointodo-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%9D%B8%EB%8D%B1%EC%8A%A4-%EC%84%A4%EA%B3%84-%EB%B0%8F-%EC%8B%A4%ED%96%89-%EA%B3%84%ED%9A%8D%EC%9D%84-%ED%86%B5%ED%95%9C-%EC%BF%BC%EB%A6%AC-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (4) Pointodo 데이터베이스 인덱스 설계 및 실행 계획을 통한 쿼리
        성능 개선
      </a>
    ),
  },
  {
    id: 21,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/7-Pointodo-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%A0%95%EA%B7%9C%ED%99%94%EB%B9%84%EC%A0%95%EA%B7%9C%ED%99%94"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (7) Pointodo 테이블 정규화/비정규화
      </a>
    ),
  },
  {
    id: 22,
    description: <h3 className="text-lg">4. DB 동시성 및 무결성 문제 해결</h3>,
  },
  {
    id: 23,
    description:
      "포인트라는 시스템을 도입한 이상 여러가지 동시성 및 무결성 등 문제가 발생합니다.",
  },
  {
    id: 24,
    description:
      "포인트에 대한 관리를 UPDATE가 아닌 INSERT,SELECT,DELETE 만으로 정규화를 통해 무결성 및 확장성 문제를 테이블 설계를 통해 해결하였습니다.",
  },
  {
    id: 25,
    description:
      "그리고 포인트를 적립, 소모하는 과정에서 여러가지 동시성 문제가 발생할 수 있는데, 이러한 로직들의 경우 동시성 문제가 일어날 가능성 자체는 적지만 그럼에도 동시성 문제를 해결은 해야하기 때문에 트랜잭션을 통한 DB자체 롤백을 이용하는 것이 아닌, 낙관적 락을 통해 애플리케이션 레벨에서 롤백을 처리해줍니다.",
  },
  {
    id: 26,
    description:
      "이러한 동시성 문제가 어떻게 일어나는지와 어떻게 해결했는지를 JMeter를 통해 직접 어뷰징을 일으키며 해결 과정을 기록하였습니다.",
  },

  {
    id: 27,
    description:
      "모든 과정은 블로그에 상세히 작성하였으니 다음 링크에서 확인 가능합니다.",
  },
  {
    id: 28,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/5-Pointodo-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EB%8F%99%EC%8B%9C%EC%84%B1-%EB%B0%8F-%EB%AC%B4%EA%B2%B0%EC%84%B1-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EC%B1%85%EB%82%99%EA%B4%80%EC%A0%81-%EB%9D%BD-JMeter"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (5) Pointodo 데이터베이스 동시성 및 무결성 문제 해결책(낙관적 락,
        JMeter)
      </a>
    ),
  },
  {
    id: 29,
    description: <h3 className="text-lg">5. 사용자 인증 구현 및 문제 해결</h3>,
  },
  {
    id: 30,
    description:
      "기존 프로젝트들에서도 항상 사용자 시스템이 있었기 때문에 인증 구현에 대한 고민이 항상 있었습니다.",
  },
  {
    id: 31,
    description:
      "세션의 문제점을 해결하고자 JWT를 도입하였고, 그로 인해 따라오는 보안 문제를 해결하기 위해 레디스와 리프레시 토큰을 이용하는 방식을 차용하였습니다.",
  },
  {
    id: 32,
    description:
      "물론 세션의 장점을 모두 가져갈 수는 없지만, 이 프로젝트의 서비스를 생각해봤을 때 JWT방식으로도 큰 문제가 없다고 생각하였습니다.",
  },
  {
    id: 33,
    description:
      "그리고 추가적으로 토큰을 기존에 로컬스토리지로 관리하며 보안적인 부분이나, 소셜로그인시 클라이언트에 토큰 응답부분에서 문제점이 많았으나, 쿠키를 이용해 이러한 부분들을 해결하였습니다.",
  },
  {
    id: 34,
    description:
      "모든 과정은 블로그에 상세히 작성하였으니 다음 링크에서 확인 가능합니다.",
  },
  {
    id: 35,
    description: (
      <a
        href="https://kubrickcode.tistory.com/entry/8-Pointodo-%ED%9A%8C%EC%9B%90-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84-%EB%B0%A9%EB%B2%95%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-JWT-%EC%BF%A0%ED%82%A4-Passport"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} (8) Pointodo 회원 인증 구현 방법(소셜 로그인, JWT, 쿠키, Passport)
      </a>
    ),
  },
];

export default PointodoReport;
