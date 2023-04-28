# Lemon - Teste Frontend - Dialog

Resolução do case do componente Dialog como processo seletivo da Lemon.

## Instruções

Após clonar o repo, o projeto pode ser instalado via:

```shell
npm run install
```

Uma vez que as dependências foram instaladas com sucesso,
os seguintes comandos são possíveis:

```shell
npm run dev
```

para rodar no modo de desenvolvimento, com hot swapping habilitado.
Este modo cria um servidor cujo link fica impresso no terminal.

```shell
npm run build
npm run preview
```

para rodar no modo bundled.
O `build` gera os arquivos finais,
e o `preview` sobe um servidor cujo link
também fica impresso no terminal.

```shell
npm run test
```

para rodar todos os testes do projeto.

## Sobre a solução

O projeto foi criado com um gerador Vite barebones,
em seguida adicionando:
- eslint e TS, para análise estática, amarrado no precommit;
- Emotion para CSS-in-JS, seguindo o princípio de Colocation;
- React Testing Library rodando via Jest.
  - Para possibilitar o uso com TS, foi escolhida a opção do `ts-jest`, que,
 apesar de não ser ideal, foi a que teve o setup mais simples,
 e como o projeto não inclui babel, não compensava o troubleshooting apenas pelo TS com Jest.

Para fazer o showcase do comportamento do Dialog,
foram criadas duas telas, acessíveis via
pseudonavegação a partir de uma home. Cada tela
possui um botão que abre seu respectivo Dialog,
e é possível voltar para home usando o header.
Nada é preservado na URL ou no Storage.

Pelo escopo do projeto (como não ter requests), foi preferido não utilizar
um framework completo, como next ou Remix, e
pela minha própria falta de familiaridade com eles.

Os testes foram todos de comportamentos, visando
cobrir o maior número de casos com o menor quantidade
de cases, evitando overlaps entre telas e componentes.

## Próximos passos

Caso tivesse mais domínio em Web atual, ou mais tempo,
investiria nesse backlog, nessa ordem:

- Uso do i18next como esquema de tradução e retirar as string hardcoded;
- Incorporar uma biblioteca de navegação;
- Testes e2e;
- Implantar um storybook;
- Animações de navegação e de Dialog.