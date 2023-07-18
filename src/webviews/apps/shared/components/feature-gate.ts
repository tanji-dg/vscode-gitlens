import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { SubscriptionState } from '../../../../subscription';

@customElement('gk-feature-gate')
export class FeatureGate extends LitElement {
	@property()
	appearance?: 'alert' | 'welcome';

	@property({ attribute: false, type: Number })
	state?: SubscriptionState;

	@property({ type: Boolean })
	visible?: boolean;

	override render() {
		return undefined;
	}
}
