import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat =>
      <li
        key={cat}
        className={`cat-item ${cat === activeCat ? 'active' : ''}`}
        onClick={() => setActiveCat(cat)}
      >
        {cat}&nbsp; | &nbsp;
      </li>
    );
    return (
      <ul className="CategoryList">
        {cats}
      </ul>
    );
  }