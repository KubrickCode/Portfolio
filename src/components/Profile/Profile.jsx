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

export default Profile;
