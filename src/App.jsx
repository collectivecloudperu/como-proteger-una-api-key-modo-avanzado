import { useState } from 'react';
import axios from 'axios';

function App() {
    const [catImage, setCatImage] = useState('');

    const fetchCatImage = async () => {
        try {
            // Usa la ruta absoluta al subir a producción
            const response = await axios.get('https://nctutos.com/backend/api.php');
            setCatImage(response.data[0].url);
        } catch (error) {
            console.error('Error al obtener la imagen del gato:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Imagen Aleatoria de un Gato 🐱</h1>
            <button onClick={fetchCatImage} style={{ padding: '10px 20px', margin: '20px' }}>
                Obtener Imagen
            </button>
            {catImage && <img src={catImage} alt="Gato" style={{ maxWidth: '500px' }} />}
        </div>
    );
}

export default App;
