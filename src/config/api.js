// Configuração da API baseada no ambiente
const getApiBaseUrl = () => {
    // Em desenvolvimento (npm start)
    if (process.env.NODE_ENV === 'development') {
        return process.env.REACT_APP_API_BASE_URL_DEV || 'http://localhost:3000/api';
    }

    // Em produção (npm build)
    if (process.env.NODE_ENV === 'production') {
        return process.env.REACT_APP_API_BASE_URL_PROD || 'https://chat-api-wellingtonsilverio.onrender.com/api';
    }

    // Fallback
    return 'http://localhost:3000/api';
};

export const API_BASE_URL = getApiBaseUrl();

// Log para debug (apenas em desenvolvimento)
if (process.env.NODE_ENV === 'development') {
    console.log('🔧 API Base URL:', API_BASE_URL);
    console.log('🌍 Environment:', process.env.NODE_ENV);
    console.log('🔗 Dev URL:', process.env.REACT_APP_API_BASE_URL_DEV);
    console.log('🚀 Prod URL:', process.env.REACT_APP_API_BASE_URL_PROD);
} 