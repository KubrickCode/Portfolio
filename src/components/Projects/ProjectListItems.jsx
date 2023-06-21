const ProjectListItems = ({ list }) => {
  return (
    <>
      <ol className="list-disc ml-5">
        {list.map((item) => (
          <li key={item.id} className="my-2">
            {item.description}
          </li>
        ))}
      </ol>
    </>
  );
};

export default ProjectListItems;
