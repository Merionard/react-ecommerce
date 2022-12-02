
const categories = [
  {
    id:1,
    title:'Hat',
  },
  {
    id:2,
    title:'womens'
  },
  {
    id:3,
    title:'Mans'
  },
  {
    id:4,
    title:'Jackets'
  },
  {
    id:5,
    title:'Trucs'
  },

]

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({title})=>
      <div className="categorie-container">
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>    
      )}
    </div>
  );
}

export default App;
