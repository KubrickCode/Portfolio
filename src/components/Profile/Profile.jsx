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
      <div className="lg:ml-5 border p-5 rounded-lg items-center h-fit">
        <h2 className="my-2 text-xl">안녕하세요 백엔드 개발자 이승현입니다.</h2>
        <ul>
          {aboutList.map((item) => (
            <li key={item.id} className="my-5">
              <p className="my-2 text-neutral-600 text-lg">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
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
    title: "GitHub",
    description: (
      <a
        href="https://github.com/KubrickCode"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        Link
      </a>
    ),
  },
  {
    id: 3,
    title: "블로그",
    description: (
      <a
        href="https://kubrickcode.tistory.com/"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        Link
      </a>
    ),
  },
];

const aboutList = [
  {
    id: 0,

    description: "- 새로운 기술을 배우는 걸 즐기고 두려움이 없는 개발자입니다.",
  },

  {
    id: 1,
    description: "- 기술적인 부분 외에도 아키텍처 및 설계에 관심이 많습니다.",
  },
  {
    id: 2,
    description:
      "- 다양한 기술 구현도 좋아하지만, 깨끗한 코드, 테스트 등 유지 보수에도 관심이 많습니다.",
  },
  {
    id: 3,
    description: "- 가능하다면 반복적인 작업을 자동화시키는 것을 좋아합니다.",
  },
  {
    id: 4,
    description:
      "- 협업에 용이한 개발자가 되기 위해 커뮤니케이션, 협업에 용이한 코드, 다른 직무와의 소통, 코드 리뷰 등에 늘 주의를 기울입니다.",
  },
  {
    id: 5,
    description: "- 그 무엇보다 개발하는 과정이 너무 즐겁습니다.",
  },
];

export default Profile;
