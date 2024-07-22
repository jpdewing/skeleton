import { Check as IconCheck, X as IconX, Moon as IconMoon, Sun as IconSun, Frown as IconFrown, Smile as IconSmile } from 'lucide-react';
import { useState } from 'react';

import { Switch } from '$lib/components/Switch/Switch.js';

export function Component() {
	const [disturb, setDisturb] = useState(false);
	const [notifications, setNotifications] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const [icons, setIcons] = useState(true);
	const [lightswitch, setLightswitch] = useState(false);
	const [compact, setCompact] = useState(false);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Switch</h1>
			</header>
			<pre className="pre">{JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)}</pre>
			<section className="space-y-4">
				<label htmlFor="disturb" className="label flex items-center justify-between gap-4">
					<p>Defaults to inactive state.</p>
					<Switch id="disturb" name="disturb" checked={disturb} onChange={setDisturb} />
				</label>
				<hr className="hr" />
				<label htmlFor="notifications" className="label flex items-center justify-between gap-4">
					<p>Defaults to active state.</p>
					<Switch id="notifications" name="notifications" checked={notifications} onChange={setNotifications} />
				</label>
				<hr className="hr" />
				<label htmlFor="disabled" className="label flex items-center justify-between gap-4">
					<p>Uses the disabled state.</p>
					<Switch id="disabled" name="disabled" checked={disabled} onChange={setDisabled} disabled />
				</label>
				<hr className="hr" />
				<label htmlFor="icons" className="label flex items-center justify-between gap-4">
					<p>Custom Icons</p>
					<Switch
						id="icons"
						name="icons"
						stateActive="bg-secondary-500"
						checked={icons}
						onChange={setIcons}
						inactiveChild={<IconX size="14" />}
						activeChild={<IconCheck size="14" />}
					/>
				</label>
				<hr className="hr" />
				<label htmlFor="mode" className="label flex items-center justify-between gap-4">
					<p>Lightswitch</p>
					<Switch
						id="mode"
						name="mode"
						stateActive="bg-surface-200"
						checked={lightswitch}
						onChange={setLightswitch}
						inactiveChild={<IconMoon size="14" />}
						activeChild={<IconSun size="14" />}
					/>
				</label>
				<hr className="hr" />
				<label htmlFor="compact" className="label flex items-center justify-between gap-4">
					<p>Compact</p>
					<Switch
						id="compact"
						name="compact"
						checked={compact}
						onChange={setCompact}
						width="w-9"
						compact
						inactiveChild={<IconFrown size="18" />}
						activeChild={<IconSmile size="18" />}
					/>
				</label>
			</section>
		</div>
	);
}