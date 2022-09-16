
import {h, Component, render} from 'https://unpkg.com/preact?module'
import htm from 'https://unpkg.com/htm?module'

const html = htm.bind(h)

export class Test extends Component {
  constructor() {
    super()
  }
  
  render() {
    return html`<div>Testing</div>`
  }
}

render(html`<$Test />`, document.getElementById("app"))
