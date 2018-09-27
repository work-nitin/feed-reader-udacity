/* This is the spec file that Jasmine will read and contains all of the tests that will be run against our application.*/
$( function() {

	let startFeed
		, endFeed;
	/********************************suite #1 ****************************************************************************************************************/
	/* This is our first test suite - This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe( 'Testing for <Udacity RSS Feeds> definitions -> ', function() {

		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it( ' Test case #1 => All RSS feeds are defined correctly', function() {
			expect( allFeeds ).toBeTruthy();

		} );

		/* This is our Second test - it tests to make sure that URL is defined properly
		 */
		it( ' Test case #2 => my url property defined correctly', function() {
			for ( let feed of allFeeds ) {
				expect( feed.url ).toBeTruthy();
			}
		} );
		/* This is our Third test - it tests to make sure that Name proporty is defined properly
		 */
		it( ' Test case #3 => my name property defined correctly', function() {
			for ( let feed of allFeeds ) {
				expect( feed.name ).toBeTruthy();
			}
		} );
	} );

	/************************************suite #2 ***************************************************************************************************/
	describe( 'Testing for <The Menu> definitions -> ', function() {
		const body = document.querySelector( 'body' );

		/* This is our 4th test - it tests to ensures the menu element is
		 * hidden by default.
		 */
		it( ' Test case #4 => Menu hidden by default', function() {
			expect( body.classList.contains( 'menu-hidden' ) ).toBe( true );
		} );

		/* This is our 5th test - test that ensures the menu changes visibility when the menu icon is clicked. This test
		 * will also test two more expectations: does the menu display when clicked and does it hide when clicked again.*/
		it( ' Test case #5 => Menu toggles ', function() {
			const menu = document.querySelector( '.menu-icon-link' );
			menu.click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			menu.click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		} );

	} );

	/************************************suite #3 ***********************************************************************************************/
	/* This is our 6th test*/
	describe( 'Testing for <Initial Entries> definitions -> ', function() {
		beforeEach( function( done ) {
			loadFeed( 0, done );
		} );
		it( 'Test case #6 => loadFeed function works correctly', function() {
			const entryElement = document.querySelectorAll( '.feed .entry' );
			expect(entryElement.length).toBeGreaterThan(0);
		} );

	} );
	/************************************suite #4 ************************************************************************************************/
	/* This is our 7th test to test whether the content actually changes  or not with new feed. As this is Async flow , we
	are poised to use the beforeeach function to actually load the feeds first and second time and so on*/
	describe( 'Testing for <New Feed Selection> definitions -> ', function() {
		beforeEach( function( done ) {
			loadFeed( 0, function() {
				startFeed = $( '.feed' ).html();

				loadFeed( 1, function() {
					endFeed = $( '.feed' ).html();

					done();

				} );
			} );
		} );
		it( ' Test case #7 => loadFeed function content changes and is not equal', function() {
			expect( startFeed ).not.toBe( endFeed );

		} );

	} );

}() );
/************************************************************************************************************************************************/
