import style from './Options.css';
import { appState, dispatch } from '../../store/index';
import { change } from '../../store/actions';

export enum Attribute {
	'one' = 'one',
	'two' = 'two',
	'three' = 'three',
}

export default class Options extends HTMLElement {
	one?: string;
	two?: string;
	three?: string;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			one: null,
			two: null,
			three: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, _: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const one = this.shadowRoot?.querySelector('.one');
        one?.addEventListener('click',  () => {
			console.log('hpta 1 clickeado mk');
			dispatch( 
				change(
					this.one
				)
			);
			console.log(appState)
		});

		const two = this.shadowRoot?.querySelector('.two');
        two?.addEventListener('click',  () => {
			console.log('hpta 2 clickeado mk');
			dispatch( 
				change(
					this.two
				)
			);
			console.log(appState)
		});

		const three = this.shadowRoot?.querySelector('.three');
        three?.addEventListener('click',  () => {
			console.log('hpta 3 clickeado mk');
			dispatch( 
				change(
					this.three
				)
			);
			console.log(appState)
		});
		
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${style}</style>
		<div>
			<p class="one">${this.one}</p>
			<p class="two">${this.two}</p>
			<p class="three">${this.three}</p>
			</div>
        `;

		
	}
}

customElements.define('my-options', Options);