# Configuração da API

## Variáveis de Ambiente

O projeto usa variáveis de ambiente específicas para cada ambiente, permitindo que o build sempre rode em produção mas com URLs diferentes.

### Desenvolvimento (npm start)

Para configurar a API em desenvolvimento, crie um arquivo `.env` na raiz do projeto:

```bash
# .env
REACT_APP_API_BASE_URL_DEV=http://localhost:3000/api
REACT_APP_API_BASE_URL_PROD=https://chat-api-wellingtonsilverio.onrender.com/api
```

### Produção (npm build)

Para configurar a API em produção, você pode:

1. **Usar variáveis de ambiente do servidor** (recomendado):
   ```bash
   REACT_APP_API_BASE_URL_DEV=http://localhost:3000/api
   REACT_APP_API_BASE_URL_PROD=https://chat-api-wellingtonsilverio.onrender.com/api
   ```

2. **Editar o arquivo de configuração** (`src/config/api.js`):
   ```javascript
   // Em desenvolvimento (npm start)
   if (process.env.NODE_ENV === 'development') {
     return process.env.REACT_APP_API_BASE_URL_DEV || 'http://localhost:3000/api';
   }
   
   // Em produção (npm build)
   if (process.env.NODE_ENV === 'production') {
     return process.env.REACT_APP_API_BASE_URL_PROD || 'https://chat-api-wellingtonsilverio.onrender.com/api';
   }
   ```

## Como Funciona

### Desenvolvimento
- **Ambiente**: `NODE_ENV=development`
- **Variável**: `REACT_APP_API_BASE_URL_DEV`
- **URL Padrão**: `http://localhost:3000/api`
- **Comando**: `npm start`

### Produção
- **Ambiente**: `NODE_ENV=production`
- **Variável**: `REACT_APP_API_BASE_URL_PROD`
- **URL Padrão**: `https://chat-api-wellingtonsilverio.onrender.com/api`
- **Comando**: `npm run build`

## Logs de Debug

Em desenvolvimento, o console mostrará:
```
🔧 API Base URL: http://localhost:3000/api
🌍 Environment: development
🔗 Dev URL: http://localhost:3000/api
🚀 Prod URL: https://chat-api-wellingtonsilverio.onrender.com/api
```

## Estrutura de Arquivos

```
src/
├── config/
│   └── api.js          # Configuração da API
├── services/
│   └── chat.js         # Service do chat (usa API_BASE_URL)
└── ...

.env                    # Variáveis de ambiente (não commitado)
API_CONFIG.md           # Documentação
.gitignore              # Protege arquivos sensíveis
```

## Exemplo de Uso

```javascript
import { API_BASE_URL } from '../config/api';

// A URL será automaticamente configurada baseada no ambiente
console.log('API URL:', API_BASE_URL);
```

## Configuração Completa

### Arquivo `.env` (exemplo):
```bash
# Desenvolvimento
REACT_APP_API_BASE_URL_DEV=http://localhost:3000/api

# Produção
REACT_APP_API_BASE_URL_PROD=https://chat-api-wellingtonsilverio.onrender.com/api
```

### Comandos:
```bash
# Desenvolvimento (usa REACT_APP_API_BASE_URL_DEV)
npm start

# Produção (usa REACT_APP_API_BASE_URL_PROD)
npm run build
```

## Vantagens desta Abordagem

1. **Build Sempre em Produção**: O `npm run build` sempre roda em `NODE_ENV=production`
2. **URLs Específicas**: Cada ambiente tem sua própria variável
3. **Flexibilidade**: Pode configurar URLs diferentes sem mudar código
4. **Segurança**: URLs sensíveis ficam em variáveis de ambiente
5. **Debug**: Logs mostram qual URL está sendo usada

## Notas Importantes

1. **Variáveis de Ambiente**: Todas as variáveis devem começar com `REACT_APP_`
2. **Build Time**: As variáveis são embutidas no build, não em runtime
3. **Fallback**: Se não houver variável de ambiente, usa a URL padrão
4. **Segurança**: Nunca commite credenciais no `.env` (adicione ao `.gitignore`)
5. **Ambiente**: O `NODE_ENV` é automaticamente definido pelo React Scripts 