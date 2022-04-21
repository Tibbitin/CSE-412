# react-animated-text-builders

> A ReactJS library to animate an appearing text.

[![NPM](https://img.shields.io/npm/v/react-animated-text-builders.svg)](https://www.npmjs.com/package/react-animated-text-builders) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

![gif](https://movcmpret.com/demo/animated-text-builders/blink.gif)

![gif](https://movcmpret.com/demo/animated-text-builders/floating.gif)

[movcmpret.com/demo/animated-text-builders/](https://movcmpret.com/demo/animated-text-builders/)


## Install

```bash
npm install --save react-animated-text-builders
```

## Usage

```jsx
import React, { Component } from 'react'

import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'

class Example extends Component {
  render() {
    return <>
      <BlinkingCursorTextBuilder
      textStyle={{fontWeight :"bold", font : "Times New Roman", fontSize : "18px"}}
      style={{transform: "rotate(-10deg)", marginTop:"10px", marginBottom :"10px"}}
      cursorComponent={<div style={{color : "green"}}> Easy to use!</div>}
      blinkTimeAfterFinish={-1}> Easy! </BlinkingCursorTextBuilder>

      <FloatingLettersTextBuilder
        floatingSpeed={500}
        lettersAppearanceDelay={250}
        animationMaxMargin={"200px"}
        animationMinMargin={"0px"}
        onAnimationFinished={()=> {alert("Animation Finished!")}}
      > Floating Letters </FloatingLettersTextBuilder>
      </>
  }
}
```

## Props

### BlinkingCursorTextBuilder
Name | Type | Function | Default
------------ | ------------- | -------------| -------------
`timeout` | PropTypes.number | Timeout (in ms) per letter | 100
`blinkTimeAfterFinish` | PropTypes.number | Blinking time in ms after animation | -
`cursorStyle` | PropTypes.object | Styles to be applied to the cursor div | -
`blinkingSpeed` | PropTypes.number | Blinking speed in ms | -
`cursorComponent` | PropTypes.element | Custom cursor component (disables `cursorStyle`) | -
`textStyle` | PropTypes.object | Styles to be applied to the (string) child | -
`onBlinkingFinished` | PropTypes.func | Callback that is fired when the blinking ended. | -

### BlinkingCursorTextBuilder
Name | Type | Function | Default
------------ | ------------- | -------------| -------------
`children` | PropTypes.string.isRequired | Text to be displayed |-
`floatingSpeed` | PropTypes.number | speed of the CSS floating animation in ms |500
`floatingStyle` | PropTypes.string | style of the CSS floating animation (FLOATING_STYLE) |FLOATING_STYLE.EASE_IN_OUT
`lettersAppearanceDelay` | PropTypes.number | the delay between each letter to be displayed |100
`letterStyle` |  PropTypes.object | Style of each letter |{}
`letterSpacing` | PropTypes.string | Spacing between letters (space-letters are not recognized) | "4px"
`animationMinMargin` | PropTypes.string | The min/end margin of the animation |"0px"
`animationMaxMargin` | PropTypes.string | The max/initial margin of the animation |"100px"
`onAnimationFinished` | PropTypes.func | Function is called after the animation finished | -

## License

MIT © [movcmpret](https://github.com/movcmpret)
