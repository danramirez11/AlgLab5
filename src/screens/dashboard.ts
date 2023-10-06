import Options, { Attribute } from '../components/Options/Options';
import { addObserver, appState, dispatch } from '../store/index';
import Character, {AttributeChar} from "../components/Character/Character"
import { BackgroundActions } from '../types/store';
import styles from "./dashboard.css"


class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `<style>${styles}</style>`;

		const options = this.ownerDocument.createElement("my-options") as Options;
		options.setAttribute(Attribute.one, "puta");
		options.setAttribute(Attribute.two, "jueputa");
		options.setAttribute(Attribute.three, "triplehijueputa");

		const optionsone = this.ownerDocument.createElement("my-options") as Options;
		optionsone.setAttribute(Attribute.one, "malparido");
		optionsone.setAttribute(Attribute.two, "gonorrea");
		optionsone.setAttribute(Attribute.three, "morrongo");

		const optionstwo = this.ownerDocument.createElement("my-options") as Options;
		optionstwo.setAttribute(Attribute.one, "promiscuo");
		optionstwo.setAttribute(Attribute.two, "pirobo");
		optionstwo.setAttribute(Attribute.three, "carechimba");

		const optionsdiv = this.ownerDocument.createElement("div");
		optionsdiv.appendChild(options);
		optionsdiv.appendChild(optionstwo);
		optionsdiv.appendChild(optionsone);
		this.shadowRoot?.appendChild(optionsdiv)

		const character = this.ownerDocument.createElement("my-char") as Character;
		character.setAttribute(AttributeChar.up, appState.up);
		character.setAttribute(AttributeChar.mid, appState.mid);
		character.setAttribute(AttributeChar.down, appState.down);

	
		

		this.shadowRoot?.appendChild(character);

	}
}

customElements.define('app-dashboard', Dashboard);