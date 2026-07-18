// Configuração do Firebase
//
// 1. Crie um projeto em https://console.firebase.google.com
// 2. No projeto, vá em "Compilação" → "Firestore Database" → "Criar banco de dados"
//    (veja o README para as regras de segurança).
// 3. Vá em "Compilação" → "Authentication" → "Vamos começar" → ative o
//    provedor "E-mail/senha".
// 4. Em "Authentication" → aba "Users" → "Add user", crie UM usuário com
//    um e-mail qualquer (ex.: acesso@seusite.com) e a senha que as pessoas
//    vão usar para entrar no site. Essa é a "senha do site" — todo mundo
//    usa a mesma.
// 5. Copie o e-mail que você escolheu para SITE_ACCESS_EMAIL abaixo (tem
//    que ser exatamente igual ao cadastrado no passo 4).
// 6. Vá em "Configurações do projeto" (engrenagem) → aba "Geral" → role até
//    "Seus aplicativos" → clique no ícone "</>" para adicionar um app da Web
//    → copie os valores gerados para firebaseConfig abaixo.
//
// Este arquivo pode ficar público no repositório: essas chaves identificam
// o projeto, mas quem pode ler/escrever os dados é controlado pelas regras
// de segurança do Firestore + pelo login (veja o README).

export const firebaseConfig = {
  apiKey: "AIzaSyCar9pXybtsDjJllXVZI5goe7jYjbWASb4",
  authDomain: "planilhasbaiano.firebaseapp.com",
  projectId: "planilhasbaiano",
  storageBucket: "planilhasbaiano.firebasestorage.app",
  messagingSenderId: "941511007829",
  appId: "1:941511007829:web:876b9291d7435245cf3edc"
};

// E-mail do usuário único criado no passo 4 acima.
// A senha desse usuário é a senha que as pessoas vão digitar para entrar no site.
export const siteAccessEmail = "baiano@gmail.com";

