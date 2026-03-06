// ==UserScript==
// @name         Paste Miro slide to slides.com
// @namespace    http://tampermonkey.net/
// @version      2026-03-06
// @description  Converts Miro HTML to slides.com supproted HTML
// @author       Bethink
// @match        *://*.slides.com/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==


const LAYOUTS = {
	MEDIA_RIGHT: 'media_right',
	MEDIA_LEFT: 'media_left',
	MEDIA_BIG: 'media_big',
	MEDIA_SMALL: 'media_small',
	MEDIA: 'media',
	TEXT: 'text',
};

const tmChoiceDialogId = 'tm-choice-dialog';
const tmSelectDialogId = 'tm-select';
async function convertMiroHtmlToSlideHtml(miroHTML) {
	let layout;

	const frameNameMatch = miroHTML.match(/<div><div>slide_(.*?)<\/div>/i);

	if (frameNameMatch.length > 1) {
		const layoutName = frameNameMatch[1];
		if (Object.values(LAYOUTS).includes(layoutName)) {
			layout = layoutName;
		}
	}

	let slidesHTML = miroHTML
		.replace(/<span data-meta.*?><\/span>/, '') // remove miro meta
		.replace(/<div><div>slide_.*?<\/div>/i, '') // remove frame name
		.replace(/<div><div><div><div><a (.*?)<\/div><\/div><\/div>/, '') // remove sticky card with link
		.replace(
			/(?:<div>)?<div><div><div>(.*?)<\/div><\/div><\/div>(?:<\/div>)?/,
			'<div class="sl-block" data-block-type="text" style="width: 960px; left: 0px; top: 0px; height: auto;" data-name="text-22f558" data-origin-id="cc355d151d11d9d136c98a23bee11868"><div class="sl-block-content" data-placeholder-tag="h1" style="z-index: 11;"><h2>$1</h2>',
		); // header

	// pagination
	slidesHTML = slidesHTML.replace(
		/<div><div><div><div>(\d+\/\d+)<\/div><\/div><\/div><\/div>/,
		'<div class="sl-block" data-block-type="text" style="height: auto; width: 960px; left: 0px; top: 630px;" data-name="text-2f292c" data-origin-id="9bc07b9d447bd7d371f1aa920fca09db"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 13;"><p><span style="font-size:0.7em">$1</span></p></div></div>',
	);

	if ((slidesHTML.match(/<div><div><div><div>/g) || []).length > 1) {
		// Slide contains subheader
		slidesHTML = slidesHTML.replace(
			/<div><div><div><div>(.*?)<\/div><\/div><\/div><\/div>/,
			(match, p1) => {
				// make subheader parts correct size and replace "-" => "–"
				const parts = p1.split(' - ').map((part) => part.trim());

				if (parts.length <= 1) return `<p>${p1}</p>`;

				// smaller sizes for subheader parts
				let result = parts[0];
				if (parts[1]) {
					const separatorForNext = parts[2] ? ' – ' : '';
					result += ` – <span style="font-size:0.7em">${capitalizeFirstLetter(
						parts[1],
					)}${separatorForNext}</span>`;
				}
				if (parts[2]) {
					result += `<span style="font-size:0.5em">${capitalizeFirstLetter(
						parts[2],
					)}</span>`;
				}

				return `<p>${result}</p>`;
			},
		);
	}

	// correct divs closing
	slidesHTML = slidesHTML
		.replace(/(<\/(p|h2)>)<div>/, '$1</div></div><div>')
		.replace(/<\/div>$/, '');


	if (!layout) {
		if (slidesHTML.includes('LUCID') || slidesHTML.includes('MULTIMEDIUM')) {
			layout = await pickLayout();
			if (layout === null) {
				alert('Coś poszło nie tak z wyborem layoutu');
				return '';
			}
		} else {
			layout = LAYOUTS.TEXT;
		}
	}

	let content =
		slidesHTML.match(
			/<div><div><div><div>(?!(?:LUCID|MULTIMEDIUM)<\/div>)(.*?)<\/div><\/div><\/div><\/div>/,
		)?.[0] ?? '';
	content = content
		.replace(/<div><div><div>(.*?)<\/div><\/div><\/div>/, '$1')
		.replaceAll('<div>', '<p><span style="font-size:0.7em">')
		.replaceAll('</div>', '</span></p>')
		.replaceAll('</p><p><span style="font-size:0.7em"><br></span></p>', '<br>&nbsp;</p>') // unify line breaks
		.replaceAll('</p><p>', '<br>')
		.replaceAll('color: rgb(26, 26, 26);', ''); // remove black color;

	slidesHTML = slidesHTML.replace(
		/<div><div><div>(.*?)<\/div><\/div><\/div><\/div>/,
		getContentHTMLForLayout(content, layout),
	);

	// remove Lucid text
	slidesHTML = slidesHTML.replace(
		/<div><div><div><div>(LUCID|MULTIMEDIUM)<\/div><\/div><\/div><\/div>/,
		'',
	);

	// remove Jira card
	slidesHTML = slidesHTML.replace(/<div><div><div>.*?<\/div><\/div><\/div>/, '');

	return slidesHTML;
}

function pickLayout() {
	let dialog = document.getElementById(tmChoiceDialogId);

	if (!dialog) {
		const optionsHtml = Object.entries(LAYOUTS)
			.map(([key, value]) => `<option value="${value}">${key}</option>`)
			.join('');

		const html = `
				  <dialog id="${tmChoiceDialogId}">
					<form method="dialog">
					  <p><strong>Wybierz layout:</strong></p>
					  <select id="${tmSelectDialogId}">
						${optionsHtml}
					  </select>
					  <div style="display: flex; flex-direction: row-reverse">
						<button value="ok">OK</button>
						<button value="cancel">Anuluj</button>
					  </div>
					</form>
				  </dialog>
				`;
		document.body.insertAdjacentHTML('beforeend', html);
		dialog = document.getElementById(tmChoiceDialogId);
		dialog.addEventListener(
			'keydown',
			(e) => {
				e.stopPropagation();
			},
			true,
		);
	}

	dialog.showModal();
	const select = document.getElementById(tmSelectDialogId);
	select.focus();

	return new Promise((resolve) => {
		// Nasłuchujemy zamknięcia dialogu
		dialog.addEventListener(
			'close',
			() => {
				if (dialog.returnValue === 'ok') {
					resolve(select.value);
				} else {
					resolve(null);
				}
			},
			{ once: true },
		);
	});
}

function getContentHTMLForLayout(content, layout) {
	if (layout === LAYOUTS.MEDIA_RIGHT) {
		return (
			`<div class="sl-block" data-block-type="text" data-name="text-ccbc0d" style="height: auto; width: 480px; left: 0px; top: 202px;" data-origin-id="873f32179cf02c875dbd428784327772"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 11;">${content}</div></div>` +
			'<div class="sl-block" data-block-type="code" data-name="code-84492d" style="width: 440px; height: 530px; left: 520px; top: 170px;" data-origin-id="9490ec45fa9f1402cde71bf5bc6c5c46"><div class="sl-block-content notranslate" data-highlight-theme="monokai" data-code-frame="none" style="z-index: 12;">\n' +
			'        <pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers=""></code></pre>\n' +
			'    <div class="editing-ui sl-block-content-preview visible-in-preview"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers="" class="hljs clojure"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-code"><div class="hljs-ln-line"></div></td></tr></tbody></table></code></pre></div></div>'
		);
	}
	if (layout === LAYOUTS.MEDIA_LEFT) {
		return (
			`<div class="sl-block" data-block-type="text" data-name="text-ccbc0d" style="height: auto; width: 480px; left: 480px; top: 190px;" data-origin-id="8b1922e953fa7007fc859482834c569a"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 10;">${content}</div></div>` +
			'<div class="sl-block" data-block-type="code" data-name="code-84492d" style="width: 440px; height: 530px; left: 0px; top: 170px;" data-origin-id="efac41e44a2c2964a5d866b31b1ea194">\n' +
			'    <div class="sl-block-content notranslate" data-highlight-theme="monokai" data-code-frame="none" style="z-index: 11;">\n' +
			'        <pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers=""></code></pre>\n' +
			'    <div class="editing-ui sl-block-content-preview visible-in-preview"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers="" class="hljs clojure"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-code"><div class="hljs-ln-line"></div></td></tr></tbody></table></code></pre></div></div>\n' +
			'</div>'
		);
	}

	if (layout === LAYOUTS.MEDIA_BIG) {
		return (
			`<div class="sl-block" data-block-type="text" style="height: auto; width: 960px; left: 0px; top: 180px;" data-name="text-0ce863" data-origin-id="db493410d7fd4908bd79e05f010d193f"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 10;">${content}</div></div>` +
			'<div class="sl-block" data-block-type="code" style="width: 960px; height: 420px; left: 0px; top: 280px;" data-name="code-2cbcfe" data-origin-id="92d1e1eab6d52e46d135c8bc07ce0cf2"><div class="sl-block-content notranslate" data-highlight-theme="monokai" data-code-frame="none" style="z-index: 12;"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers=""></code></pre><div class="editing-ui sl-block-content-preview visible-in-preview"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers="" class="hljs clojure"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-code"><div class="hljs-ln-line"></div></td></tr></tbody></table></code></pre></div></div></div>'
		);
	}

	if (layout === LAYOUTS.MEDIA_SMALL) {
		return (
			`<div class="sl-block" data-block-type="text" style="height: auto; width: 960px; left: 0px; top: 190px;" data-name="text-0ce863" data-origin-id="db493410d7fd4908bd79e05f010d193f"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 10;">${content}</div></div>` +
			'<div class="sl-block" data-block-type="code" style="width: 960px; height: 280px; left: 0px; top: 420px;" data-name="code-2cbcfe" data-origin-id="92d1e1eab6d52e46d135c8bc07ce0cf2"><div class="sl-block-content notranslate" data-highlight-theme="monokai" data-code-frame="none" style="z-index: 12;"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers=""></code></pre><div class="editing-ui sl-block-content-preview visible-in-preview"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers="" class="hljs clojure"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-code"><div class="hljs-ln-line"></div></td></tr></tbody></table></code></pre></div></div></div>'
		);
	}

	if (layout === LAYOUTS.MEDIA) {
		return '<div class="sl-block" data-block-type="code" style="width: 960px; height: 560px; left: 0px; top: 140px;" data-name="code-2cbcfe" data-origin-id="92d1e1eab6d52e46d135c8bc07ce0cf2"><div class="sl-block-content notranslate" data-highlight-theme="monokai" data-code-frame="none" style="z-index: 12;"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers=""></code></pre><div class="editing-ui sl-block-content-preview visible-in-preview"><pre style="font-size: 16px; line-height: 19px; tab-size: 4;"><code data-line-numbers="" class="hljs clojure"><table class="hljs-ln"><tbody><tr><td class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></td><td class="hljs-ln-code"><div class="hljs-ln-line"></div></td></tr></tbody></table></code></pre></div></div></div>';
	}

	return `<div class="sl-block" data-block-type="text" data-name="text-ccbc0d" style="height: auto; width: 960px; left: 0px; top: 215px;" data-origin-id="c624ba8b801cc46fc3cdfd422ff6f5f2"><div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Text" style="z-index: 10;">${content}</div></div>`;
}

function capitalizeFirstLetter(val) {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

(function () {
	'use strict';

	console.log('Tampermonkey script loaded: Paste Miro slide to slides.com');
	document.addEventListener('keydown', async function (event) {
		if ((event.metaKey || event.ctrlKey) && event.altKey && event.code === 'KeyV') {
			console.log(event);
			event.preventDefault();
			const clipboard = await navigator.clipboard.read();

			if (clipboard.length === 0) {
				alert('Schowek jest pusty. Skopiuj slajd z Miro');
				return;
			}

			const clipboardItem = clipboard[0];
			let miroHTML;

			try {
				miroHTML = await (await clipboardItem.getType('text/html')).text();
			} catch {
				alert('Schowek nie zawiera HTML. Czy został skopiowany slajd z Miro?');
			}
			console.log(miroHTML);

			if ((miroHTML.match(/miro-data-/) || []).length === 0) {
				alert(
					'Zawartość schowka nie wygląda jakby pochodziła z Miro. Skopiuj slajd z Miro',
				);
			}

			const slidesHTML = await convertMiroHtmlToSlideHtml(miroHTML);

			console.log(slidesHTML);
			const dataTransfer = new DataTransfer();
			dataTransfer.setData('text/html', slidesHTML);
			dataTransfer.setData('text/plain', slidesHTML);

			const pasteEvent = new ClipboardEvent('paste', {
				clipboardData: dataTransfer,
				bubbles: true,
				cancelable: true,
			});

			document.activeElement.dispatchEvent(pasteEvent);
		}
	});
})();

if (typeof exports !== 'undefined') {
	module.exports = { convertMiroHtmlToSlideHtml };
}
