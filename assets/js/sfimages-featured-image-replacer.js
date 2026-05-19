document.addEventListener( 'DOMContentLoaded', function () {
	if (
		typeof smartframeImageData === 'undefined' ||
		! smartframeImageData.imageUrl ||
		! smartframeImageData.embedHtml
	) {
		return;
	}

	let targetImg = document.querySelector(
		'img[src="' + smartframeImageData.imageUrl + '"]'
	);
	if ( ! targetImg ) {
		const images = document.getElementsByTagName( 'img' );

		for ( let i = 0; i < images.length; i++ ) {
			if ( images[ i ].src.includes( smartframeImageData.imageUrl ) ) {
				targetImg = images[ i ];
				break;
			}
		}
	}

	if ( targetImg ) {
		const tempDiv = document.createElement( 'div' );
		tempDiv.innerHTML = smartframeImageData.embedHtml;
		const smartframeNode = tempDiv.firstChild;

		if ( targetImg.className ) {
			smartframeNode.className += ' ' + targetImg.className;
		}

		targetImg.replaceWith( smartframeNode );
	}
} );
