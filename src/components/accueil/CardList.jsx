import { useState, useEffect } from 'react';
import Card from './Card';

function CardList() {
  const [visibleArticles, setVisibleArticles] = useState(6);

  // Fonction pour afficher 6 articles de plus
  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + 6);
  };

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // État pour la catégorie sélectionnée

  const API_URL = 'https://moble-back.vercel.app'; // URL de ton back-end

  useEffect(() => {
    const fetchData = async () => {
      let url = `${API_URL}/products`; // URL pour récupérer tous les produits
      if (selectedCategory) {
        url = `${API_URL}/products/category/${selectedCategory}`; // URL pour récupérer les produits par catégorie
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, [selectedCategory]); // Se déclenche quand la catégorie change

  return (
    <div>
      {/* Bannière avec les boutons pour filtrer */}
      <div className="filter-content">
        <button className={`filter-item ${selectedCategory === "" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("")}>Tous les produits</button>

        <button className={`filter-item ${selectedCategory === "assises" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("assises")}>Assises</button>

        <button className={`filter-item ${selectedCategory === "rangements" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("rangements")}>Meubles de rangement</button>

        <button className={`filter-item ${selectedCategory === "decorations" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("decorations")}>Décorations</button>

        <button className={`filter-item ${selectedCategory === "tables" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("tables")}>Tables et bureaux</button>

        <button 
        className={`filter-item ${selectedCategory === "lits" ? "active" : ""}`} 
        onClick={() => setSelectedCategory("lits")}>Lits</button>
      </div>

      {/* Liste des produits filtrés */}
      <div className="center-cards">
        <div className="container-all-cards">
          {products.slice(0, visibleArticles).map((product) => (
            <Card key={product.id} product={product} />
          ))}        
        </div>
      </div>
      <div className='container-show-more-button'>
        {visibleArticles < products.length && (
          <button onClick={handleShowMore} className="show-more-button">Voir plus</button>
        )}
      </div>
    </div>
  );
}

export default CardList;

