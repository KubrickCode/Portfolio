const KcvocaReport = () => {
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
      "아무래도 첫 개인 프로젝트이다 보니, 모든 과정 자체가 트러블 이었습니다.",
  },
  {
    id: 1,
    description:
      "하지만 깔끔하지 못하더라도 어떻게든 기능 구현에 초점을 맞춰서 프로젝트를 완성하였습니다.",
  },
  {
    id: 2,
    description:
      "물론 시간 관계상 우선 순위에서 지금은 밀려있어서 제대로 유지보수가 되고 있진 못하지만 꾸준한 업데이트가 계획되어 있습니다.",
  },
  {
    id: 3,
    description:
      "이 프로젝트가 그동안 겪어온 변화 과정은 다음과 같습니다.(계속 추가 예정)",
  },
  {
    id: 4,
    description: (
      <ul className="list-disc ml-5">
        <li>
          처음에는 Express로 구성된 서버에, EJS 뷰 엔진 + 순수 CSS와 바닐라
          자바스크립트의 DOM 조작으로만 모든 기능을 구현함.
        </li>
        <li>
          추후 리액트에 대한 공부 이후 클라이언트를 처음부터 리액트 기반으로
          새로 구성함(이 때는 백엔드 개발자가 되겠다는 확신은 없던 상황이기에
          풀스택 기반으로 공부함).
        </li>
        <li>
          백엔드에 대한 흥미를 더욱 느낀 뒤, MVC 디자인 패턴이라는 것에 대해
          알게 되고, 계층형 아키텍처 기반으로 백엔드 구조를 재설정함.
        </li>
        <li>
          타입 리스 언어가 가지는 문제점들에 대해 파악한 뒤, 타입스크립트를
          공부하여 프론트와 백엔드에 모두 적용시키게 됨.
        </li>
      </ul>
    ),
  },
];

export default KcvocaReport;
