# 🌤️ Application Météo

<p align="center">
&#x20; \<strong>Une application météo moderne, simple et responsive.\</strong>
&#x20; \<br>
&#x20; Consultez la météo actuelle et les prévisions sur 5 jours pour la ville de votre choix.
</p>

<p align="center">
&#x20; \<img src="[https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)" alt="HTML5">
&#x20; \<img src="[https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)" alt="CSS3">
&#x20; \<img src="[https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)" alt="JavaScript">
&#x20; \<img src="[https://img.shields.io/badge/Open--Meteo-API-22C55E?style=for-the-badge](https://img.shields.io/badge/Open--Meteo-API-22C55E?style=for-the-badge)" alt="Open-Meteo">
</p>

---

## 📌 Présentation

**Application Météo** est un projet Front-End développé avec HTML, CSS et JavaScript natif.

L'application permet aux utilisateurs de rechercher une ville et de consulter ses conditions météorologiques actuelles ainsi que les prévisions des cinq prochains jours.

Les données météorologiques sont récupérées depuis l'API gratuite **Open-Meteo**.

## ✨ Fonctionnalités

- 🔎 Recherche météo par nom de ville.
- 🌡️ Affichage de la température actuelle.
- 💧 Affichage du taux d'humidité.
- 💨 Affichage de la vitesse du vent.
- ☁️ Description des conditions météorologiques avec des icônes.
- 📅 Prévisions météorologiques sur 5 jours.
- 🌍 Recherche des coordonnées géographiques d'une ville.
- ⚠️ Gestion des erreurs et des villes inconnues.
- 🔄 Bouton pour réessayer une recherche.
- 📱 Interface responsive adaptée aux différents écrans.

## 🛠️ Technologies utilisées

| Technologie     | Utilisation                    |
| --------------- | ------------------------------ |
| HTML5           | Structure de l'application     |
| CSS3            | Design et responsive           |
| JavaScript ES6+ | Logique et manipulation du DOM |
| Fetch API       | Communication avec les API     |
| Open-Meteo      | Données météorologiques        |

## 📁 Structure du projet

```text
Application-m-t-o/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── api.js
    ├── ui.js
    └── weatherCodes.js
```

## 🚀 Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/ben-anass/weather-app
```

### 2. Accéder au dossier

```bash
cd Application-m-t-o
```

### 3. Lancer l'application

Ouvrir le fichier `index.html` avec l'extension **Live Server** de Visual Studio Code.

Aucune installation de dépendances n'est nécessaire.

## 🌐 API utilisées

Le projet utilise deux endpoints de l'API Open-Meteo.

### 1. Geocoding API

Permet de rechercher une ville et de récupérer ses coordonnées géographiques.

```text
https://geocoding-api.open-meteo.com/v1/search
```

**Paramètres principaux :**

| Paramètre | Description          |
| --------- | -------------------- |
| name      | Nom de la ville      |
| count     | Nombre de résultats  |
| language  | Langue des résultats |
| format    | Format de réponse    |

### 2. Forecast API

Permet de récupérer la météo actuelle et les prévisions quotidiennes.

```text
https://api.open-meteo.com/v1/forecast
```

**Paramètres principaux :**

| Paramètre        | Description                  |
| ---------------- | ---------------------------- |
| latitude         | Latitude de la ville         |
| longitude        | Longitude de la ville        |
| current          | Données météo actuelles      |
| daily            | Prévisions quotidiennes      |
| forecast_days    | Nombre de jours de prévision |
| temperature_unit | Unité de température         |
| wind_speed_unit  | Unité de vitesse du vent     |
| timezone         | Fuseau horaire               |

## 📊 Exemple de réponse JSON

Exemple simplifié des données utilisées par l'application :

```json
{
  "current": {
    "temperature_2m": 22.5,
    "relative_humidity_2m": 60,
    "weather_code": 1,
    "wind_speed_10m": 12.4
  },
  "daily": {
    "time": ["2026-11-17", "2026-11-18"],
    "temperature_2m_max": [25, 23],
    "temperature_2m_min": [16, 15],
    "weather_code": [1, 3]
  }
}
```

*Les valeurs ci-dessus sont illustratives.*

## 🔄 Correspondance des données avec l'interface

| Donnée API           | Affichage                  |
| -------------------- | -------------------------- |
| temperature_2m       | Température actuelle       |
| relative_humidity_2m | Humidité                   |
| wind_speed_10m       | Vitesse du vent            |
| weather_code         | Description et icône météo |
| daily.time           | Date des prévisions        |
| temperature_2m_max   | Température maximale       |
| temperature_2m_min   | Température minimale       |

Les codes météorologiques sont interprétés grâce au fichier `weatherCodes.js`.

## ⚠️ Gestion des erreurs

L'application prévoit plusieurs situations :

- Champ de recherche vide.
- Ville introuvable.
- Problème de connexion réseau.
- Service météo temporairement indisponible.
- Limitation de requêtes API (HTTP 429).
- Possibilité de relancer une recherche avec le bouton « Réessayer ».

## 🧪 Tests manuels

| Scénario                       | Résultat attendu              | État                   |
| ------------------------------ | ----------------------------- | ---------------------- |
| Recherche avec champ vide      | Message de validation         | ✅ Testé                |
| Recherche d'une ville valide   | Météo et prévisions affichées | ✅ Testé                |
| Recherche d'une ville inconnue | Message « Ville introuvable » | ✅ Testé                |
| Problème de connexion          | Message d'erreur              | ✅ Testé                |
| Réessayer une recherche        | Nouvelle tentative            | ✅ Testé                |
| Limite API (429)               | Message de quota atteint      | ✅ Testé                |

## 🔐 Sécurité et limites

- L'application utilise Open-Meteo, qui ne nécessite pas de clé API pour les endpoints utilisés.
- Les appels API sont effectués directement depuis le navigateur.
- L'application dépend d'une connexion Internet pour récupérer les données.
- La disponibilité des données dépend du service Open-Meteo et de ses conditions d'utilisation.

## 🎯 Objectifs pédagogiques

Ce projet permet de pratiquer :

- La manipulation du DOM.
- Les modules JavaScript (`import` / `export`).
- Les fonctions asynchrones (`async` / `await`).
- Les requêtes HTTP avec `fetch()`.
- La gestion des erreurs avec `try` / `catch` / `finally`.
- La manipulation des tableaux avec `map()`.
- L'organisation du code en plusieurs fichiers.

## 👨‍💻 Auteur

**Anass Ben Abou**

Étudiant en formation Full Stack Web Development — YouCode.

- GitHub : [@ben-anass](https://github.com/ben-anass)
- Projet : [Application Météo](https://github.com/ben-anass/weather-app)

---

<p align="center">   Développé avec ❤️ et JavaScript </p>
