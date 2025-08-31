# react-typescript-flight-indicators-extended

**This is a fork of https://github.com/starnutoditopo/react-typescript-flight-indicators.**

> A React + Typescript porting of react-flight-indicators (https://github.com/skyhop/react-flight-indicators) extended with additional indicator functionality, ESM and CJS module support.

[![NPM](https://img.shields.io/npm/v/react-typescript-flight-indicators-extended.svg)](https://www.npmjs.com/package/react-typescript-flight-indicators) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The `react-typescript-flight-indicators-extended` package allows you to display high quality flight indicators using html, css3, React, TypeScript and SVG images.
The methods make customization and real-time implementation really easy.
Further, since all the images are vector svg, you can resize the indicators to your application without any quality loss!

Currently supported indicators are :

- Attitude (artificial horizon)
- Heading
- Vertical speed
- Air speed
    - Meters per second
    - Kilometers per second
    - Knots
- Altimeter
- Variometer
    - Feet per minute
    - Meters per second
    - Kilometers per minute

`react-typescript-flight-indicators` is a ported from [skyhop/react-flight-indicators](https://github.com/skyhop/react-flight-indicators), and refactored for use with React and TypeScript.

## Install

Using YARN:

```bash
yarn add react-typescript-flight-indicators-extended
```

Alternatively, with NPM:

```bash
npm install --save react-typescript-flight-indicators-extended
```

## Usage

```ts

```

# Instruments

## Airspeed

![alt text](documentation/airspeed.png)

## License

GPL-3.0 © [Starnuto di topo](https://github.com/starnutoditopo)

## Authors and License

Forked from starnutoditopo's https://github.com/starnutoditopo/react-typescript-flight-indicators.

Originally this project has been based on work by igneosaur, which could be found [on Bitbucket](https://bitbucket.org/igneosaur/attitude-indicator).

Further work is done by Sébastien Matton (seb_matton@hotmail.com), who developed the jQuery plugin as part of his master's for showing realtime flight information from a quadcopter.

[Corstian Boerman](https://corstianboerman.com) has adapted the project by Sébastien for use with React.

The project is published under GPLv3 License. See LICENSE file for more informations
