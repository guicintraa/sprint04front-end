Integrantes : 
Guilherme Batista Cintra RM 562850
Davi Tagawa Schincaglia Lima Lemos RM 563457
Caio Felipe Silva RM 564615

SPRINT04-LEMBRETES/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── vercel.json
├── .env.example
│
├── public/
│   ├── data/
│   │     └── lembretes.json   # Mock local usado caso a API não esteja disponível
│   └── imagens/
│         ├── fiap.png
│         ├── health-care5.png
│         └── NOT_FOUND.png
│
└── src/
    ├── App.tsx                  # Configuração de rotas
    ├── index.css                # Configuração do TailwindCSS
    ├── main.tsx                 # Renderização principal
    │
    ├── types.ts                 # Modelos TypeScript do sistema
    ├── services/
    │     └── api.ts             # Cliente de API + fallback local
    │
    ├── components/
    │     ├── Header.tsx
    │     ├── Footer.tsx
    │     ├── NavMenu.tsx
    │     └── FAQItem.tsx
    │
    └── pages/
          ├── Home.tsx
          ├── FAQ.tsx
          ├── Contato.tsx
          ├── Integrantes.tsx
          ├── NotFound.tsx
          │
          ├── Lembretes.tsx        # Listagem de lembretes
          ├── LembreteDetalhe.tsx # Visualização completa
          └── LembreteForm.tsx    # Formulário criar/editar

---------------------------


[<img src="caio.jpeg">
<img src="davi.jpeg">
<img src="guilherme.jpeg">
](https://github.com/guicintraa/projetoHcChallenge/issues/15)
---------------------------

https://github.com/guicintraa/projetoHcChallenge


---------------------------

Tecnologia	Uso
React 18	Biblioteca principal para a construção da interface
Vite	Ferramenta de build para aplicações React + TS
TypeScript	Tipagem estática e definição de modelos de dados
React Router DOM	Navegação e rotas dinâmicas
TailwindCSS	Estilização e responsividade
Fetch API	Requisições HTTP para integração com API
Vercel	Deploy da aplicação
Git + GitHub	Versionamento e colaboração entre os integrantes
----------------------------



---------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
