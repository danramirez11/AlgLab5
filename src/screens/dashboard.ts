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
		options.setAttribute(Attribute.one, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/up1.png");
		options.setAttribute(Attribute.two, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/mid1.png");
		options.setAttribute(Attribute.three, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/down1.png");

		const optionsone = this.ownerDocument.createElement("my-options") as Options;
		optionsone.setAttribute(Attribute.one, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/up2.png");
		optionsone.setAttribute(Attribute.two, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/mid2.png");
		optionsone.setAttribute(Attribute.three, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/down2.png");

		const optionstwo = this.ownerDocument.createElement("my-options") as Options;
		optionstwo.setAttribute(Attribute.one, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/up3.png");
		optionstwo.setAttribute(Attribute.two, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/mid3.png");
		optionstwo.setAttribute(Attribute.three, "https://raw.githubusercontent.com/danramirez11/AlgLab5/main/dist/photos/down3.png");

		const optionsdiv = this.ownerDocument.createElement("section");
		optionsdiv.classList.add("options")
		optionsdiv.appendChild(options);
		optionsdiv.appendChild(optionstwo);
		optionsdiv.appendChild(optionsone);
		this.shadowRoot?.appendChild(optionsdiv)

		const character = this.ownerDocument.createElement("my-char") as Character;
		character.setAttribute(AttributeChar.up, appState.up);
		character.setAttribute(AttributeChar.mid, appState.mid);
		character.setAttribute(AttributeChar.down, appState.down);
		optionsdiv.appendChild(character);

	}
}

customElements.define('app-dashboard', Dashboard);