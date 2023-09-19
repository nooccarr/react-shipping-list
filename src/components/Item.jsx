const Item = ({ item, handleClick, handleDelete }) => {
  const { id, name, checked } = item;

  return (
    <div>
      <h2>{name}</h2>
      <label htmlFor="checkbox">
        Checked
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          defaultChecked={checked}
          onClick={(e) => handleClick(id)}
        />
      </label>
      <button onClick={(e) => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;