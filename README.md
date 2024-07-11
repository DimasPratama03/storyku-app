# BIGIO - Full Stack Challenge

## Introduction

The StoryKu web application utilizes ReactJS for its FrontEnd and ExpressJS for the Backend. This setup enables the application to handle Create, Read, and Update (CRU) operations for Story data, as well as full CRUD (Create, Read, Update, Delete) operations for chapters associated with each Story.

## Table of Contents

- [Introduction](#introduction)
- [Authors](#authors)
- [Features](#features)
- [Libraries](#libraries)
- [Project Structure](#project-structure)
- [List Of Challenge Requirements](#list-of-challenge-requirements)

## Authors

- [@Nafis.ATH](https://github.com/NFS2245)

## Features

- Story List
  - Search by name or author
  - Filter popup modal
  - Reset filter
  - Table shown Story list with several columns
- Add Story
  - Input general information
  - Chapter List
    - Add chapter
    - List chapter table
- Story Detail
- Edit Story

## Libraries

- ReactJS
  - axios
  - bulma
  - date-fns
  - react-bulma-components
  - react-quill
  - react-router-dom

## Project Structure

```bash
storyku-app/
|   |-- node_modules/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- AddChapterPage.js
|   |   |   |-- AddStoryPage.js
|   |   |   |-- DashboardPage.js
|   |   |   |-- DetailChapterPage.js
|   |   |   |-- DetailStoryPage.js
|   |   |   |-- Header.js
|   |   |   |-- ModalCancel.js
|   |   |   |-- ModalFilter.js
|   |   |   |-- SideNav.js
|   |   |   |-- StoryPage.js
|   |   |   |-- UpdateChapterPage.js
|   |   |   |-- UpdateStoryPage.js
|   |   |-- routes/
|   |   |-- App.js
|   |   |-- index.js
|   |-- .gitignore
|   |-- package-lock.json
|   |-- package.json
|   |-- README.md
|-- docs/
|   |-- img/
|-- README.md
```

## Youtube URL

link here 

