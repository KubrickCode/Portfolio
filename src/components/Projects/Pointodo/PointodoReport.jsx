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
    description:
      "우선 본격적으로 프로젝트를 진행하기 전에 그동안 제대로 공부하지 못했던 도커와 자동배포에 대한 구성을 먼저 하기로 마음 먹었습니다.",
  },
  {
    id: 1,
    description:
      "이번에는 본격적으로 좀 더 정갈하게 서비스한다는 생각으로 임할것이기 때문에 인프라를 우선적으로 구축하는게 맞다고 생각하였습니다.",
  },
  {
    id: 2,
    description:
      "어찌되었든 성공적으로(?) 도커에 대한 공부또한 하게되었고, 깃허브 액션을 통해 자동배포를 구성하게 되었다. 상세한 내용은 다음 링크에서 확인할 수 있습니다.",
  },
  {
    id: 3,
    description: (
      <a
        href="https://rune-shovel-96b.notion.site/Docker-14aabc62d4f24b1b8071d8ac7c6efd89?pvs=4"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} Docker 및 자동 배포 삽질기
      </a>
    ),
  },
  {
    id: 4,
    description:
      "이후 본격적으로 코드를 짜게 되는데, 이번 프로젝트의 가장 큰 목표이기도 한 클린 아키텍처 지향 방식의 설계를 먼저 하게 됐습니다.",
  },
  {
    id: 5,
    description:
      "이러한 도메인 주도 설계는 결국 유지보수 및 협업에 대한 용이성이 가장 큰 목표이고, 상세한 내용은 다음 링크에서 확인할 수 있습니다.",
  },
  {
    id: 6,
    description: (
      <a
        href="https://rune-shovel-96b.notion.site/DIP-e7f5ffd3b7a44f57a05b71bee1dcee3b?pvs=4"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {">"}
        {">"} DIP를 적용한 아키텍처
      </a>
    ),
  },
  {
    id: 7,
    description: "계속 작성 중...",
  },
];

export default PointodoReport;
