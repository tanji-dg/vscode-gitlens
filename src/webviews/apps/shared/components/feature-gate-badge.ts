import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Subscription } from '../../../../subscription';
import {
	getSubscriptionTimeRemaining,
	isSubscriptionStateTrial,
	SubscriptionState,
} from '../../../../subscription';
import '../../plus/shared/components/feature-gate-plus-state';
import { pluralize } from '../../../../system/string';
import { focusOutline } from './styles/lit/a11y.css';
import { elementBase } from './styles/lit/base.css';
import './overlays/pop-over';

@customElement('gk-feature-gate-badge')
export class FeatureGateBadge extends LitElement {
	static override styles = [
		elementBase,
		css`
			:host {
				position: relative;
			}

			:host(:focus) {
				${focusOutline}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`,
	];

	@property({ reflect: true })
	placement?: `${'top' | 'bottom'} ${'start' | 'end'}` = 'top end';

	@property({ attribute: false })
	subscription?: Subscription;

	override render() {
		return undefined;
	}
}
