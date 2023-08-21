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
      "프로젝트를 하며 겪었던 첫번째 트러블로는, 팀원들이 모두 개발을 거의 처음 경험해본다는 것이었습니다.",
  },
  {
    id: 1,
    description:
      "이전에도 팀 프로젝트를 해본 적들은 있었으나, 제공된 스켈레톤 코드를 기반으로 빈칸 맞추기 형식으로만 개발을 해왔어서, 내가 보기에 기본적인 자바스크립트나 JSX문법 외에는 거의 개발 역량이 전무하였습니다.",
  },
  {
    id: 2,
    description:
      "그렇기 때문에 우선적으로 역할을 바로 분담하고 개발을 들어가기 보다는, 기획 단계를 충분히 여유롭게 가져간 뒤에, 팀원분들에게 프로젝트를 하는동안 숙지해야하는 여러 기본적인 것들에 대해 알려드렸습니다(리액트의 훅 사용법, CSS 프레임워크 사용법, 상태관리 등)",
  },
  {
    id: 3,
    description:
      "그리고 백엔드 파트에서도 다른 팀원 한분에게 타입스크립트에 대한 부분과 아키텍처등에 관련된 부분을 열심히 알려드렸습니다(바쁘셔서 결과적으로 백엔드를 혼자하게 되긴 했습니다)",
  },
  {
    id: 4,
    description:
      "이외에는 이전 개인프로젝트에서 미리 공부해온 추상화를 바탕으로 한 아키텍처를 접목시켜서 개발을 하는 것에 집중하였습니다.",
  },
  {
    id: 5,
    description:
      "추가적으로 담당 코치님의 조언에 따라 동시성 문제를 해결하기 위해 트랜잭션과 락에 대해 어느정도 알아보고 낙관적 락을 애플리케이션 레벨에서 적용하게 되었습니다.",
  },
  {
    id: 6,
    description:
      "그리고 DB 실행 계획 분석을 통해 예상과는 다르게 인덱스가 작동하는 부분을 포착하였고 상황에 따라 1000배 이상의 성능 향상 까지도 경험하였습니다.",
  },
  {
    id: 15,
    description: <img src="/2차 상장.png" />,
  },
];

export default SinabroReport;
