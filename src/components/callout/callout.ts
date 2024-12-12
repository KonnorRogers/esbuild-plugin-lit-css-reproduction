import { html, LitElement } from 'lit';
import styles from './callout.css';

export default class Callout extends LitElement {
  static styles = [styles]

  render () { return html `<div></div>` }
}

customElements.define("my-callout", Callout)
