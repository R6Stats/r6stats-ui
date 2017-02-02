# r6stats-ui
A lightweight collection of Vue.js components used for the UI on the R6Stats website.

## Requirements
[Vue.js](http://vuejs.org/) (2.x) - there are no plans for any Vue 1.x support.

## Browser Support
> IE10+

## Usage

```js
import Vue from 'vue'
import R6StatsComponents from 'r6stats-components'

Vue.use(R6StatsComponents)
```

or

```js
import Vue from 'vue'
import { Badge, ProgressBar } from 'r6stats-components'

new Vue({
  components: {
    Badge,
    ProgressBar
  }
})
```