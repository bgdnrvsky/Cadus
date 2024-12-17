import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonActions from './ButtonActions';

type OverlayImageProps = {
  imageUrl: string;
  text: string;
};

const OverlayImage: React.FC<OverlayImageProps> = ({ imageUrl, text }) => {
  const navigate = useNavigate();

  // Fonction de redirection vers "Livre d'Or"
  const handleNavigateToLivreDOr = () => {
    navigate('/livredor');
  };

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt="Overlayed" style={styles.image} />
      <div style={styles.overlay}>
        <span style={styles.text}>{text}</span>
        <div style={styles.buttonContainer}>
          {/* Bouton redirigeant vers "Livre d'Or" */}
          <ButtonActions text="Découvrir les témoignages" onClick={handleNavigateToLivreDOr} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative' as 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  image: {
    width: '2763px',
    height: '100%',
    objectFit: 'cover' as 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  text: {
    color: '#bea2be',
    fontSize: '200px',
    fontWeight: 'bold' as 'bold',
    textAlign: 'center' as 'center',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    fontFamily: `'Times New Roman', serif`,
    zIndex: 2,
  },
  buttonContainer: {
    marginBottom: '80px',
    color: 'white',
    backgroundColor: '#bea2be',
    fontSize: '50px',
    borderRadius: '20px',
    padding: '20px 20px',
    fontFamily: `'Times New Roman', serif`,
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  },
};

export default OverlayImage;
