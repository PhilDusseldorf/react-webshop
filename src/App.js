import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Mens",
    },
    {
      id: 3,
      title: "Womens",
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title, id }) => (
        <div key={id} className='category-container'>
          <div className='background-image'></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop it!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
