import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div style={styles.Sidebar}>
      <div style={styles.sidebarContainer}>
        <h2 style={styles.title}>Nous sommes membres titulaires :</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>CNS</li>
          <li style={styles.listItem}>CCI</li>
          <li style={styles.listItem}>France Assos Santé</li>
        </ul>
        <button style={styles.ctaButton}>Mise en avant de nos collaborations</button>
      </div>
    </div>
  );
};

const styles = {
  Sidebar: {
    padding:'150px',
  },
    sidebarContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1000px', // Remplit toute la largeur du conteneur parent
      height: '700px', // Remplit toute la hauteur du conteneur parent
      backgroundColor: '#8FD3C1',
      borderRadius: '20px',
      padding: '70px',
  },
  title: {
    color: '#bea2be',
    fontSize: '50px',
    fontWeight: 'bold' as 'bold',
    textAlign: 'center' as 'center',
    marginBottom: '20px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '30px',
    textAlign: 'center' as 'center',
    margin: '10px 0',
    borderBottom: '1px solid #ffffff',
    paddingBottom: '10px',
    color: '#FFFFFF',
  },
  ctaButton: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontWeight: 'bold' as 'bold',
    padding: '10px 20px',
    border: '4px solid #000000',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '70%',
    textAlign: 'center' as 'center',
    fontSize:'30px'
  },
};

export default Sidebar;
