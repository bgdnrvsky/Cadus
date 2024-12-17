import React from 'react';
import Heading from '../components/Heading';
import OverlayImage from '../components/OverlayImage';
import CarouselActions from '../components/CarouselActions';
import Sidebar from '../components/Sidebar';

export default function Thanks() {
  const slides = [
    'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7c/Logo_CNS_CMJN.jpg/640px-Logo_CNS_CMJN.jpg',
    'https://ile-de-france.france-assos-sante.org/wp-content/uploads/sites/13/2024/02/Affiche-fond-blanc-JEDS-2024-1-pdf.jpg',
    'https://static.vecteezy.com/ti/vecteur-libre/p1/7223645-cci-lettre-logo-design-sur-fond-blanc-cci-creative-initiales-lettre-logo-concept-cci-lettre-design-vectoriel.jpg',
  ];

  return (
    <div style={styles.pageContainer}>
      <OverlayImage
        imageUrl="https://media2.ledevoir.com/images_galerie/nwd_623134_472602/image.jpg"
        text="Nos actions"
      />

      <div style={styles.contentContainer}>
        <div style={styles.carouselContainer}>
          <CarouselActions slides={slides} />
        </div>
        <div style={styles.sidebarContainer}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '0px 0px 20px',
    backgroundColor: '#bea2be',
    minHeight: '100vh', // Assure que le contenu prend toute la hauteur de la page
  },
  contentContainer: {
    display: 'flex',
  },
  carouselContainer: {
    width: '50%', // Prend 50% de la largeur pour le carousel
    height: '100%', // Prend toute la hauteur disponible
  },
  sidebarContainer:{
    width: '40%', // Prend 50% de la largeur pour la sidebar
    height: '100%', // Prend toute la hauteur disponible
  },
};