const Profile = () => {
  return (
    <div className="lg:flex lg:flex-row justify-center">
      <div className="flex flex-row justify-center items-center border mb-5 lg:mb-0 lg:w-fit rounded-lg p-5">
        <ul>
          <li className="flex flex-row">
            <div>
              <img src="증명사진.png" className="w-28 rounded-xl" />
            </div>
            <div className="grid content-center ml-5">
              <div className="my-2">이름 : 이승현</div>
              <div className="my-2">직무 : 백엔드 개발자</div>
            </div>
          </li>
          {profileList.map((item) => (
            <li key={item.id} className="mt-10">
              {item.title} : {item.description}
            </li>
          ))}
        </ul>
      </div>
      <ul className="lg:ml-5 border p-5 rounded-lg">
        {aboutList.map((item) => (
          <li key={item.id} className="my-5">
            <h2 className="my-2 text-lg">{item.title}</h2>
            <p className="my-2 text-neutral-600">{item.description1}</p>
            <p className="my-2 text-neutral-600">{item.description2}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const profileList = [
  {
    id: 0,
    title: "이메일",
    description: "kubrickcode@gmail.com",
  },
  {
    id: 1,
    title: "연락처",
    description: "010-9409-7145",
  },
  {
    id: 2,
    title: "깃허브",
    description: (
      <a
        href="https://github.com/KubrickCode"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        https://github.com/KubrickCode
      </a>
    ),
  },
];

const aboutList = [
  {
    id: 0,
    title: "1. 새로운 기술을 배우는 데에 두려움이 없습니다",
    description1:
      "- 한 가지 기술에 대해 깊게 파보기 이전에, 다양한 기술을 습득한 뒤 필요에 따라 깊게 공부하는 것이 즐겁습니다.",
    description2:
      "- 러닝 커브가 있을지라도 진보된 혹은 나에게 필요한 기술을 체득하면 분명한 이점이 있다고 생각합니다.",
  },

  {
    id: 1,
    title: "2. 기술적인 부분 외에도 아키텍처에 관심이 많습니다.",
    description1:
      "- 단순히 코드를 짜는 것 외에도, 어떻게 해야 넓은 시각으로 구조를 설계해야 할지, 항상 고민을 하게 됩니다.",
    description2:
      "- 클린한 아키텍처를 기반으로 유지 보수와 협업에 용이한 애플리케이션을 만드는 과정이 즐겁습니다.",
  },
  {
    id: 2,
    title: "3. 협업에 용이한 개발자가 되고자 합니다.",
    description1:
      "- 항상 모자란 부분에 있어서는 피드백을 겸허히 받아들일 준비가 되어있고, 잘하는 부분에서는 최대한 알기 쉽게 알려주는 것을 좋아합니다.",
    description2:
      "- 어떻게 해야 동료, 다른 직무 간 원활하게 커뮤니케이션을 할 수 있을지, 어떻게 해야 좋은 문서화를 통해 협업을 할 수 있을지 늘 고민합니다.",
  },
];

export default Profile;
