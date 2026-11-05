
import { useMemo, useState } from 'react'
import './App.css'

const recipes = [
  {
    id: 1,
    name: 'Vegetable Biryani',
    category: 'Lunch',
    time: '40 min',
    emoji: '🍛',
    description: 'Fragrant rice cooked with vegetables and aromatic spices.',
  },
  {
    id: 2,
    name: 'Masala Dosa',
    category: 'Breakfast',
    time: '30 min',
    emoji: '🥞',
    description: 'Crispy dosa served with a flavorful potato filling.',
  },
  {
    id: 3,
    name: 'Paneer Curry',
    category: 'Dinner',
    time: '35 min',
    emoji: '🍲',
    description: 'Soft paneer in a creamy, spiced tomato gravy.',
  },
  {
    id: 4,
    name: 'Samosa',
    category: 'Snacks',
    time: '45 min',
    emoji: '🥟',
    description: 'Golden pastry filled with spiced potatoes and peas.',
  },
  {
    id: 5,
    name: 'Idli and Sambar',
    category: 'Breakfast',
    time: '25 min',
    emoji: '🥥',
    description: 'Soft steamed idlis served with warm sambar.',
  },
  {
    id: 6,
    name: 'Chole',
    category: 'Lunch',
    time: '35 min',
    emoji: '🫘',
    description: 'A comforting chickpea curry packed with spices.',
  },
]

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks']

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [favorites, setFavorites] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'All' || recipe.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    )
  }

  return (
    <div className="cookbook">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-icon">🍲</span>
          CookBook<span className="brand-dot">.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#favorites">Favorites ({favorites.length})</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">YOUR DAILY DOSE OF DELICIOUS</span>
            <h1>
              Good food.
              <br />
              <span>Good mood.</span>
            </h1>
            <p>
              Discover delicious recipes, find your next favorite meal,
              and bring more joy to your kitchen.
            </p>
            <a className="primary-button" href="#recipes">
              Explore recipes <span>→</span>
            </a>
          </div>

          <div className="hero-art" aria-label="Illustration of a bowl of food">
            <span className="art-sparkle sparkle-one">✦</span>
            <span className="art-sparkle sparkle-two">✧</span>
            <div className="food-circle">
              <span>🍛</span>
            </div>
            <div className="art-label">Made with love ♡</div>
          </div>
        </section>

        <section className="recipes-section" id="recipes">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FIND YOUR NEXT FAVORITE</span>
              <h2>Explore recipes <span>♥</span></h2>
              <p>Something delicious is waiting for you.</p>
            </div>
            <div className="recipe-count">
              {filteredRecipes.length} recipes
            </div>
          </div>

          <label className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search recipes..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <div className="category-list" aria-label="Filter recipes">
            {categories.map((item) => (
              <button
                key={item}
                className={`category-button ${
                  category === item ? 'active' : ''
                }`}
                onClick={() => setCategory(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <article className="recipe-card" key={recipe.id}>
                <div className="recipe-art">
                  <span>{recipe.emoji}</span>
                  <button
                    className={`favorite-button ${
                      favorites.includes(recipe.id) ? 'is-favorite' : ''
                    }`}
                    type="button"
                    onClick={() => toggleFavorite(recipe.id)}
                    aria-label={
                      favorites.includes(recipe.id)
                        ? `Remove ${recipe.name} from favorites`
                        : `Add ${recipe.name} to favorites`
                    }
                  >
                    {favorites.includes(recipe.id) ? '♥' : '♡'}
                  </button>
                  <span className="recipe-category">{recipe.category}</span>
                </div>

                <div className="recipe-info">
                  <div className="recipe-time">◷ {recipe.time}</div>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                  <button
                    className="details-button"
                    type="button"
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    View recipe <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="empty-state">
              <span>🔎</span>
              <h3>No recipes found</h3>
              <p>Try another search or select a different category.</p>
              <button
                className="details-button"
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                }}
                type="button"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="favorites-section" id="favorites">
          <h2>Your favorites <span>♥</span></h2>
          <p>
            {favorites.length
              ? `You've saved ${favorites.length} delicious ${
                  favorites.length === 1 ? 'recipe' : 'recipes'
                }.`
              : 'Tap the heart on any recipe card to save it here.'}
          </p>
          {favorites.length > 0 && (
            <div className="favorite-names">
              {recipes
                .filter((recipe) => favorites.includes(recipe.id))
                .map((recipe) => (
                  <button
                    type="button"
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    {recipe.emoji} {recipe.name} →
                  </button>
                ))}
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          🍲 CookBook<span className="brand-dot">.</span>
        </a>
        <p>Made with love for food lovers. © {new Date().getFullYear()}</p>
      </footer>

      {selectedRecipe && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedRecipe(null)}
        >
          <section
            className="recipe-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSelectedRecipe(null)}
              aria-label="Close recipe"
            >
              ×
            </button>
            <div className="modal-emoji">{selectedRecipe.emoji}</div>
            <span className="eyebrow">{selectedRecipe.category}</span>
            <h2 id="modal-title">{selectedRecipe.name}</h2>
            <p>{selectedRecipe.description}</p>
            <p><strong>Preparation time:</strong> {selectedRecipe.time}</p>
            <h3>Ingredients and instructions</h3>
            <p>
              This is a starter recipe card. Next, we can add the full
              ingredient list, quantities, and step-by-step cooking method.
            </p>
            <button
              className="primary-button"
              type="button"
              onClick={() => setSelectedRecipe(null)}
            >
              Back to recipes
            </button>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
