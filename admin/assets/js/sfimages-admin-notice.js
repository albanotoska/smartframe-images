document.addEventListener( 'DOMContentLoaded', function () {
	document.body.addEventListener( 'click', function ( event ) {
		if (
			event.target.closest( '#smartframe-api-notice .notice-dismiss' )
		) {
			const formData = new URLSearchParams();
			formData.append( 'action', 'smartframe_dismiss_api_notice' );
			formData.append( 'nonce', smartframeNoticeVars.nonce );
			fetch( smartframeNoticeVars.ajaxurl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData.toString(),
			} );
		}
	} );
} );
