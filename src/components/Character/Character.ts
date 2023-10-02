import style from './Character.css';
import { dispatch } from '../../store/index';
import { change } from '../../store/actions';

export enum AttributeChar {
	'up' = 'up',
	'mid' = 'mid',
    "down" = "down"
}

export default class Character extends HTMLElement {
	up?: string;
	mid?: string;
    down?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeChar, null> = {
			up: null,
			mid: null,
            down:null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeChar, _: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const btn = this.shadowRoot?.querySelector('button');
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${style}</style>
        <section>
		<p>${this.up}</p>
		</section>
        `;
	}
}

customElements.define('my-char', Character);