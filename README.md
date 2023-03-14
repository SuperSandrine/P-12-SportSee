<a name="readme-top"></a>
<br />

<div align="center">
  <h1 align="center">Développez un tableau de bord d'analyses avec React</h1>

  <p align="center">
    Open-Classroom, P12/14, Formation Développeur Front-End, Javascript React mars2022/mai2023
    <br />
  </p>
</div>

<details>
  <summary>Table des matières</summary>
  <ol>
    <li><a href="#SportSee-:-the-sports-analytics-app"> SportSee : the sports analytics app</a>
    <ul>
      <li><a href="#General-information">General information</a></li>
      <ul>
        <li><a href="#Built-with">Built with</a></li>
        <li><a href="#Technologies">Technologies</a></li>
        <li><a href="#Naming-conventions">Naming conventions</a></li>
      </ul>
      <li><a href="#Getting-start">Getting start</a></li>
      <ul>
        <li><a href="#Prerequisites">Prerequisites</a></li>
        <li><a href="#Back-end">Back-end</a></li>
        <li><a href="#Front-end">Front-end</a></li>
      </ul>
      <li><a href="#Author">Author</a></li>
    </ul>
  </li>
  </ol>
</details>

# SportSee : the sports analytics app

SportSee launch a new version of its user profile page. The user can now follow up each sport sessions performed, his calories burnt and different visualisation of his performance data.

## General information

### Built with

- [![Vite in a badge][ViteBadge]](https://vitejs.dev/)
- ![React in a badge][ReactBadge]
- ![Recharts in badge][RechartsBadge]
- ![ VS in a badge][VisualStudioBadge]
- ![ Git in a badge][GitBadge]
- ![ GitHub in a badge][GitHubBadge]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies

- ![html][HtmlBadge]
- ![css][CssBadge]
- ![JS][JsBadge]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Structure

```bash
OC-PROJET-12/
|
|-SportSee-back/
|  |- ... (element for API from the repo :  P9-front-end-dashboard)
|
|-SportSee-front/
|  |- ...
|  |- src
|      |- assets
|      |- Components
|      |      |-component1
|      |            |- component1.jsx
|      |            |- sub-component1.jsx
|      |            |- Styled-component1.jsx
|      |- Data
|      |- Pages
|      |- styles
|      |- main.jsx
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Naming conventions

#### CSS:

- class names : `camelCase`

#### JS:

- variables (const, let) : `camelCase`
- classes : `PascalCase`
- functions : `camelCase`
- components : `PascalCase`
- hooks : `camelCase`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting start

This repo contains all the front-end code to run the sports analytics dashboard SportSee. Also, you'll need to clone the back-end repo, but everything is explained in this Getting start.

### Prerequisites

- ![Node][NodeBadge]
- ![Npm][NpmBadge]
- ![Yarn][YarnBadge]

The project uses yarn package management, check that Yarn is installed by running: `yarn --version`

If not, you can install yarn through npm package manager, please refer to the [yarn documentation](https://classic.yarnpkg.com/en/docs/getting-started).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Back-end

Once you're package management is settled, then you can get and run the Back-end:

The back is a micro API from [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

1. Fork the repository
2. Clone it on your computer

```sh
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```

3. Install the dependencies with :

```sh
 yarn install
```

4. Run the micro Api with :

```sh
yarn run dev
```

Wait few seconds and you should see:
`Magic happends on port 3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Front-end

Once you have your Backend running, you can:

1. Clone the repo on your computer, in the parent folder of the back (as specified in the structure part)

```sh
git clone https://github.com/SuperSandrine/P-12-SportSee.git
```

2. Install the dependencies with:

```sh
 yarn install
```

3. Run the front:

```sh
yarn run dev
```

Wait for a second and you should see:

```console
VITE v4.1.3 ready in 289 ms
➜ Local: http://127.0.0.1:5173/
➜ Network: use --host to expose
➜ press h to show help
```

If the navigator window did not open, your can use the link provide in your terminal at 'local', which is your local port.

Now, back and front are connected.
Keep in mind that you have to run the back-end before the front-end to get the data fetched from back and displayed.

Enjoy !

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Author

![author][MeBadge]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[MeBadge]: https://img.shields.io/badge/Author-Sandrine%20Mestas-blue?style=for-the-badge
[JsBadge]: https://img.shields.io/badge/Language-JavaScript-yellow
[CssBadge]: https://img.shields.io/badge/Language-css-blue
[HtmlBadge]: https://img.shields.io/badge/Language-html-orange
[ReactBadge]: https://img.shields.io/badge/Library-React-mediumaquamarine
[RechartsBadge]: https://img.shields.io/badge/Library-Recharts-lightseagreen
[VisualStudioBadge]: https://img.shields.io/badge/IDE-VisualStudio-steelblue
[ViteBadge]: https://img.shields.io/badge/Frontend%20Tooling-Vite-orchid
[GitBadge]: https://img.shields.io/badge/Versionning-Git-orangered
[GitHubBadge]: https://img.shields.io/badge/Versionning-GitHub-black
[NodeBadge]: https://img.shields.io/badge/Node-v%2014.21.1-forestgreen
[NpmBadge]: https://img.shields.io/badge/Npm-v%206.14.17-firebrick
[YarnBadge]: https://img.shields.io/badge/Yarn-v%201.22.19-steelblue

```

```
