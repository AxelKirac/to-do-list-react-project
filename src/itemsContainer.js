export const ItemsContainer = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className={item.isDone ? "done" : ""}>
          {item.value}
        </li>
      ))}
    </ul>
  );
};
