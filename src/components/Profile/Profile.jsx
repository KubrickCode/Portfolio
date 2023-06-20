const Profile = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <img src="profile.jpg" className="w-60 rounded-xl" />
        <ul className="ml-10">
          {profileList.map((item) => (
            <li key={item.id} className="my-10">
              {item.title} : {item.description}
            </li>
          ))}
        </ul>
      </div>
      <ol className="text-center mt-5">
        <li className="my-2">
          새로운 기술을 받아들이는 것에 두려움이 없는 백엔드 개발자입니다.
        </li>
        <li className="my-2">공부 이상으로 코딩이 너무 즐거운 개발자입니다.</li>
        <li className="my-2">
          기술적인 부분 외에도 아키텍처에 관심이 많습니다.
        </li>
      </ol>
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

export default Profile;
