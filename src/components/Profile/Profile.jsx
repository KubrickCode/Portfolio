const Profile = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <img src="profile.jpg" className="w-72 rounded-xl" />
        <ul className="ml-10">
          {profileList.map((item) => (
            <li key={item.id} className="my-10">
              {item.title} : {item.description}
            </li>
          ))}
        </ul>
      </div>
      <ul className="mx-60 mt-10 border p-5 rounded-lg">
        {aboutList.map((item) => (
          <li key={item.id} className="my-5">
            <h2 className="my-2 text-lg">{item.title}</h2>
            <p className="my-2 text-neutral-600">{item.description1}</p>
            <p className="my-2 text-neutral-600">{item.description2}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const profileList = [
  {
    id: 0,
    title: "이름",
    description: "이승현",
  },
  {
    id: 1,
    title: "생년월일",
    description: "1994/09/16",
  },
  {
    id: 2,
    title: "이메일",
    description: "kubrickcode@gmail.com",
  },
  {
    id: 3,
    title: "연락처",
    description: "010-9409-7145",
  },
  {
    id: 4,
    title: "직무",
    description: "백엔드 개발자",
  },
  {
    id: 5,
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
      "- 한 가지 기술에 대해 깊게 파보는 것도 훌륭하지만, 다양한 기술을 습득한 뒤 필요에 따라 깊게공부하는 것이 즐겁습니다.",
    description2:
      "- 러닝 커브가 있을지라도 진보된 혹은 나에게 필요한 기술을 체득하면 분명한 이점이 있다고 생각합니다.",
  },
  {
    id: 1,
    title: "2. 코딩이 즐겁습니다.",
    description1:
      "- 코딩을 할 때 단순히 교과서적인 공부라고 생각들지 않고, 할 때마다 정말 즐거운 기분을 느낍니다.",
    description2:
      "- 수많은 트러블 슈팅을 겪는다 할지라도, 원하는 결과에 도달했을 때 정말 짜릿함을 느끼고, 백엔드 개발을 할 때 유난히 그런 기분을 느낍니다.",
  },
  {
    id: 2,
    title: "3. 기술적인 부분 외에도 아키텍처에 관심이 많습니다.",
    description1:
      "- 단순히 코드를 짜는 것 외에도, 어떻게 해야 넓은 시각으로 구조를 설계해야 할지, 항상 고민을 하게 됩니다.",
    description2:
      "- 훌륭한 아키텍처를 기반으로 유지 보수가 용이한 애플리케이션을 만드는 과정이 즐겁습니다.",
  },
];

export default Profile;
