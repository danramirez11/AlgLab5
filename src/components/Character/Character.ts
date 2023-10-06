import style from './Character.css';
import { dispatch } from '../../store/index';
import { changeUp, changeDown, changeMid } from '../../store/actions';

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
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${style}</style>
        <section>
		<img class="body" src="https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/body.png">
		<img class="part" src="${this.up}">
		<img class="part" src="${this.down}">
		<img class="part" src="${this.mid}">
		</section>
        `;
	}
}

customElements.define('my-char', Character);