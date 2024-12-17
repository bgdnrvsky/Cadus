import React, { useState } from 'react';

type CarouselProps = {
  slides: string[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={styles.carouselContainer}>
      {/* Bouton de flèche gauche */}
      <button onClick={goToPrevious} style={{ ...styles.arrowButton, ...styles.leftArrow }}>{'<'}</button>
      <img src={slides[currentIndex]} alt="Slide" style={styles.slide} />
      {/* Bouton de flèche droite */}
      <button onClick={goToNext} style={{ ...styles.arrowButton, ...styles.rightArrow }}>{'>'}</button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as 'relative',
    width: '1200px', // Remplit toute la largeur du conteneur parent
    height: '1000px', // Remplit toute la hauteur du conteneur parent
    overflow: 'hidden',
    borderRadius: '20px',
  },
  slide: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  },
  arrowButton: {
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 2,
    borderRadius: '50%', // Pour des boutons circulaires
  },
  leftArrow: {
    left: '10px', // Positionné à l'extrême gauche
  },
  rightArrow: {
    right: '10px', // Positionné à l'extrême droite
  },
};

export default Carousel;
