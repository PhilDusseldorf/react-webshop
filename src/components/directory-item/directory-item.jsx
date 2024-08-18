import { useNavigate } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ directory }) => {
  const { imageUrl, title, id } = directory;
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/shop/${title}`);
  };

  return (
    <div
      key={id}
      className='directory-item-container'
      onClick={() => handleClick(title)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop it!</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
