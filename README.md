# react-typing-writer-effect

A lightweight react typing animation effect component which you can adjust speed and font size.

(https://www.npmjs.com/package/react-typing-writer-effect/)

## Installation

npm:

`npm i react-typing-writer-effect`

## Demo

![](./examples/react-type-writer-effect.gif)

## Usage

```js
import TypingEffects from "react-typing-writer-effect";

function TypingAnimation() {
  return (
    <TypingEffects
      textArray={["Hello", "my", "friend"]}
      speed={200}
      size={50}
    />
  );
}
```

## Props

| Prop      | Type     | Description                             | Default   |
| --------- | -------- | --------------------------------------- | --------- |
| textArray | string[] | Write your text here                    | ["Hello"] |
| speed     | number   | speed value smaller then typing quicker | 200       |
| size      | number   | The font size of text                   | 50        |
