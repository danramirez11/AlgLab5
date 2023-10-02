import Options, { Attribute } from '../components/Options/Options';
import { addObserver, appState, dispatch } from '../store/index';
import Character, {AttributeChar} from "../components/Character/Character"
import { BackgroundActions } from '../types/store';


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
		if (this.shadowRoot) this.shadowRoot.innerHTML = ``;

		const options = this.ownerDocument.createElement("my-options") as Options;
		options.setAttribute(Attribute.one, "puta");
		options.setAttribute(Attribute.two, "jueputa");
		options.setAttribute(Attribute.three, "triplehijueputa");
		this.shadowRoot?.appendChild(options)

		const character = this.ownerDocument.createElement("my-char") as Character;
		character.setAttribute(AttributeChar.up, appState.BackgroundColor);
		

		this.shadowRoot?.appendChild(character);

	}
}

customElements.define('app-dashboard', Dashboard);