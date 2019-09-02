# Example
[See example](https://bnbarak.github.io/split-panel)

# Installation
`npm i split-panel`

# Usage

```javascript
import SplitPane from 'SplitPane';
````
```javascript
<SplitPane>
  <div>a</div>
  <div>b</div>
</SplitPane>
```

## Props
##### leftMaxWidth ([number] default: `null`)

Left panel maximum width in pixels
    
##### leftMinWidth ([number], default: `null`)

Left panel minimum width in pixels
    
##### rightMaxWidth ([number] default: `null`)

Right panel maximum width in pixels

##### rightMinWidth ([number] default: `null`)

Right panel minimum width in pixels

##### defaultLeftWidth ([number] default: `null`)

Left panel default width in pixels

##### defaultRightWidth ([number] default: `null`)

Right panel default width in pixels

##### defaultRatio ([number] default: `null`)

Default ration between the two side. Scale: 1-100;
Example: `40` will set the width of the left panel to 40% of the container

##### height ([number] default: `null`)

Container's height in pixels

##### containerStyle ([object] default: `{}`)

An object to  style the container, [example](https://bnbarak.github.io/split-panel/?path=/story/style--container)

##### dividerStyle ([object] default: `{}`)

An object to  style the divider, [example](https://bnbarak.github.io/split-panel/?path=/story/style--divider)

##### onStart ([object] default: `() => {}`)

A callback being fire when the divider starts moving

##### onFinish ([object] default: `() => {}`)

A callback being fire when on mouse up event from the divider.

##### onChange: ([object] default: `({ratio, containerWidth, leftWidth, rightWisth) => {}`)

A callback being fire when the divider moves.
