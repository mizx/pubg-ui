pubg-ui

Latest screenshot

!(current)(screenshots/current.png)

Design

!(design)(screenshots/design.jpg)

# What is pubg-ui?
Pubg-ui is an open-source UI replacement for PlayerUnknown's Battlegrounds.

# How is this possible?
PUBG uses Coherent. In brief, their website is just a website layer
that renders on top of the game. Since that website is hosted remotely
(and not bundled in the game itself), when PUBG tries to load it,
we can show our version instead.

# Is this hacking? Can you cheat?
No. This isn't hacking: it doesn't allow you to cheat, and doesn't modify any game files.
This is a reskin of the Main Menu UI. No extra features are available.

# Why?
This was made as a fun side-project with friends. There are three aspects:
1. MITM python proxy for websocket connection
- reverse engineer API
- transform requests mid-flight
2. Library
- generalize shared code into library code
3. UI
- first client of these libraries

# Technical stuff
When this project started, PUBG loaded its UI over HTTP only. One extra
line in the hosts file, and your new UI would show up.

Later on, PUBG changed this to HTTPS. It was a fun technical challenge
figuring out how to automate self-signing certs so our UI would still
work.

Eventually, PUBG will embed these assets and kill this project.
Until then,

# Requirements
- yarn (preferred) or npm.
  - install dependencies by running `yarn install` anywhere in the project.

# Packages
## pubg-ui-theme
React app that will replace the PUBG Main Menu UI. This will be a great reference and example for react developers on how to interact with the pubg-ui package.

# Usage
(cd packages/pubg-ui-theme; yarn start)
(cd packages/pubg-ui; yarn watch)

## pubg-ui
Core logic/components/modules theme authors will utilize to make their own PUBG Main Menu UI. The goal for this package is to allow react developers to create PUBG menus without needing to worry about how to communicate with the game engine or backend servers within PUBG.

## debug-server
Used to reverse engineer what's going on in the PUBG Main Menu.

## debug-client
Obsolete? Probably getting removed/merged with debug-server.
