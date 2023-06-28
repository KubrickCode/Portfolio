const SinabroReport = () => {
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
    description:
      "백엔드 부분을 혼자 진행하였음에도, 나름 레퍼런스들이 많이 생기다보니 개발 속도가 이전보다는 향상되어서 비교적 프론트엔드 쪽에 API전달을 빠르게 해드릴 수 있었다.",
  },
  {
    id: 1,
    description:
      "결정적으로 혼자 진행한 덕에, 기존에 공부해왔던 구조를 그대로 적용시킬 수 있었고, 타입스크립트나 NestJS 사용 등(거의 마지막에 추가된 부분이긴 하지만) 팀원의 러닝커브를 고려하지 않아도 되서 나름 편하게 작업하였다.",
  },
  {
    id: 2,
    description:
      "무엇보다 기존에 공부해왔던 방향성에 대해 현업 시니어 개발자인데 코치님에게 검사 맡을 수 있었던 점이 정말 감사했다.",
  },
  {
    id: 3,
    description:
      "특히 코치님께 피드백 받았던 여러 부분들이 유난히 기억에 남기도 하고 도움이 많이 되었다.",
  },
  {
    id: 4,
    description:
      "우선 나름의 객체 지향을 적용했기 때문에, 코치님은 나에게 그 이상을 주문하셨는데, 그 부분들이 추후에 내가 공부해야할 방향성에 대한 굉장한 기폭제가 되었다.",
  },
  {
    id: 5,
    description:
      "특히 단순 백엔드 엔지니어로서의 로직 구성 외에도 DB에 대해서 많이 강조를 하셨다.",
  },
  {
    id: 6,
    description:
      "첫 번째로는, 어떤식으로 실행계획을 통하여 쿼리 성능을 테스트할 수 있는지에 대해서 배웠는데, 이러한 경험을 통해 그동안 얼마나 무지하게 상상코딩만으로 테이블을 설계해왔는지 뼈저리게 깨닫게 되었다.",
  },
  {
    id: 7,
    description:
      "이러한 실행 계획을 통해, 어떠한 부분에서 나의 쿼리 설계가 잘못되었는지, 그리고 어떠한 부분이 에상대로 작동하는지, 그리고 어떻게 쿼리를 개선해 나가야할지 방향성을 알 수 있음을 깨닫게 되었다.",
  },
  {
    id: 8,
    description:
      "두 번째로는, 이번에 적용하였던 포인트 시스템과 같은 도메인에서 일어날 수 있는 동시성과 무결성 등에 관한 엄청난 이슈들에 대해 크게 고민해볼 것을 코치님께 권장받았다.",
  },
  {
    id: 9,
    description:
      "코치님의 몇가지 조언 + 서칭을 통해서 트랜잭션과 락에 대해 조금 공부하게 되었고, 동시성과 관련해서 나름의 해결책을 제시해보는 경험또한 가지게 되었다.",
  },
  {
    id: 10,
    description:
      "다음 링크를 통하여 정말 초보스러운 방법일지 몰라도 나름 삽질했던 경험을 정리한 글을 볼 수 있다.",
  },
  {
    id: 11,
    description: (
      <a
        href="https://www.notion.so/2-DB-7d4cf97670524f91a52bf4fae3a6dd3a?pvs=4"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} 2차 팀 프로젝트 포인트 시스템 DB 삽질기
      </a>
    ),
  },
  {
    id: 12,
    description:
      "이러한 DB관련된 이야기 말고도, DTO의 필요성과 적용범위에 대한 이야기, 현재 구성한 계층형 아키텍처와 의존성 주입에서 발생할 수 있는 문제에 대한 이야기에 대해서도 많은 피드백을 해주셨다.",
  },
  {
    id: 13,
    description:
      "이를 통해 다음 스텝으로 내가 공부해야할 것들에 대해 어느정도 파악했으며, 비슷한 도메인을 가지고 클린 아키텍처, DB에 대한 추가적인 공부 및 성능 테스트와 개선, 배포 관련된 추가 인프라 공부 등을 적용할 개인 프로젝트를 다시 한번 하기로 마음먹었다.",
  },
  {
    id: 14,
    description:
      "아무튼 교육적으로 계몽적인 상황이 여러 번 있었으며, 너무 좋은 팀원들을 만나게 된 것 이외에도 굉장히 뜻 깊은 프로젝트가 되었다.",
  },
  {
    id: 15,
    description: <img src="/2차 상장.png" />,
  },
];

export default SinabroReport;
