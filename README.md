<h1 align="center">
  <img alt="Ecoleta" title="#Ecoleta" src="./web/src/assets/logo.svg" width="350px" />
  <img align="right" alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="100px" />
</h1>

<h4 align="center"> 
  :recycle: Ecoleta 1.0 🚀
</h4>
<p align="center">
	
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/castelogui/next-level-week?color=%2304D361">

  <a href="https://github.com/castelogui/next-level-week/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
	
  <a href="https://www.linkedin.com/in/castelo-guilherme/">
    <img alt="Made by castelogui" src="https://img.shields.io/badge/made%20by-castelogui-%2304D361">
  </a>

  <a href="https://github.com/castelogui/next-level-week/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/castelogui/next-level-week">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/castelogui/next-level-week">

</p>

<p align="center">
  
  <a href="https://github.com/castelogui/next-level-week/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/castelogui/next-level-week?style=social">
  </a>
  
  <a href="https://github.com/castelogui/next-level-week/watchers">
    <img alt="Watchers" src="https://img.shields.io/github/watchers/castelogui/next-level-week?style=social">
  </a>
  
  <a href="https://github.com/castelogui/next-level-week/network/members">
    <img alt="Forks" src="https://img.shields.io/github/forks/castelogui/next-level-week?style=social">
  </a>
  
  <a href="https://github.com/castelogui/next-level-week/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/castelogui/next-level-week?style=social">
  </a>
  
  <a href="https://github.com/castelogui/next-level-week/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/castelogui/next-level-week?style=social">
  </a>	
</p>

## 💻 O Projeto 
Ecoleta é um projeto desenvolvido com base na semana internacional do meio ambiente. O objetivo é conectar pessoas com as empresas que coletam resíduos específicos, como lâmpadas, baterias, óleo de cozinha etc.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="800px" />
</h1>

## :information_source: O que é a Next Level Week? <img align="center" alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="50px" />


Um evento online e totalmente gratuito! Uma semana prática com muito código, desafios, networking com o único objetivo de nos levar para o próximo nível como desenvolvedor.

O método da rocketseat é baseado em 3 pilares: **Prática** diárias das tecnologias, **Foco** total no aprendizado e na construção da aplicação, interações em **Grupo** na comunidade da [Rocketseat][rocketseat]. 


## :rocket: Tecnologias

Este projeto foi desenvolvido comm as seguintes Tecnologias:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## 🔖 Layout

Para ter acesso ao layout [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/?viewer=1&node-id=).

<h1 align="center">
    <img alt="Layout" title="Layout" src=".github/layout.png" width="800px" />
</h1>


## 🤔 Como contribuir

- Faça a *fork*;
- Crie uma *branch* de sua feature: `git checkout -b minha-alteracao`;
- Faça um *commit* de suas mudanças: `git commit -m 'mudanças: minha-alteracao'`;
- De um *push* da sua branch: `git push origin minha-alteracao`.

Depois de mesclar seu *pull request*, você pode deletar a sua *branch*.


## :interrobang: Como usar

Para clonar e rodar esta aplicação, é preciso ter o [Git](https://git-scm.com) e o [Node.js][nodejs] instalado em seu computador.

```bash
# Clonar esse repositório
$ git clone https://github.com/castelogui/next-level-week

# Navegue até o diretório
$ cd next-level-week

# Abrir no VSCode
$ code .
```

Na linha de comando **como administrador**:

### Instalar API 

```bash
# Navegue até o diretório
$ cd next-level-week/server

# Instale as dependencias necessárias
$ npm install

# Execute o comando para rodar as Migrates
$ npm run knex:migrate

# Execute o comando para rodar os Seeds
$ npm run knex:seed

# Depois é preciso dar um start no server
$ npm run dev

# running on port 3333
```

### Instalar o Front-end

```bash
# Navegue até o diretório
$ cd next-level-week/web

# Instale as dependências necessarias
$ npm install

# Rode
$ npm start

# running on port 3000
```

### Instalar o Mobile

```bash
# Navegue até o diretório
$ cd next-level-week/mobile

# Instale as dependências
$ npm install

# Rode
$ expo start

# Expo will open, just scan the qrcode on terminal or expo page

# Se houver problemas com as fontes, execute como administrador:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

# Instale o expo em seu dispositivo móvel ou no emulador

```

## :memo: License

Este projeto está sob a MIT License. Consulte [LICENSE](https://github.com/castelogui/next-level-week/blob/master/LICENSE) para mais detalhes.


Feito com :heart: e todo o auxilio da [ Comunidade Rocketseat][rocketseat] :wave: *by* [Guilherme Castelo!](https://www.linkedin.com/in/castelo-guilherme/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rocketseat]: https://rocketseat.com.br/comunidade
