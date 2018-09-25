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
			expect( allFeeds ).toBeDefined();
			expect( allFeeds.length ).not.toBe( 0 );
		} );

		/* This is our Second test - it tests to make sure that URL is defined properly
		 */
		it( ' Test case #2 => my url property defined correctly', function() {
			for ( let feed of allFeeds ) {
				expect( feed.url ).toBeDefined();
				expect( feed.url.length ).not.toBe( 0 );
			}
		} );
		/* This is our Third test - it tests to make sure that Name proporty is defined properly
		 */
		it( ' Test case #3 => my name property defined correctly', function() {
			for ( let feed of allFeeds ) {
				expect( feed.name ).toBeDefined();
				expect( feed.name.length ).not.toBe( 0 );
			}
		} );
	} );

	/************************************suite #2 ***************************************************************************************************/
	describe( 'Testing for <The Menu> definitions -> ', function() {

		/* This is our 4th test - it tests to ensures the menu element is
		 * hidden by default.
		 */
		it( ' Test case #4 => Menu hidden by default', function() {
			const body = document.querySelector( 'body' );
			expect( body.classList.contains( 'menu-hidden' ) ).toBe( true );
		} );

		/* This is our 5th test - test that ensures the menu changes visibility when the menu icon is clicked. This test
		 * will also test two more expectations: does the menu display when clicked and does it hide when clicked again.*/
		it( ' Test case #5 => Menu toggles ', function() {
			const body = document.querySelector( 'body' );
			const menu = document.querySelector( '.menu-icon-link' );
			menu.click();
			expect( body.classList.contains( 'menu-hidden' ) ).toBe( false );
			menu.click();
			expect( body.classList.contains( 'menu-hidden' ) ).toBe( true );
		} );

	} );

	/************************************suite #3 ***********************************************************************************************/
	describe( 'Testing for <Initial Entries> definitions -> ', function() {
		beforeEach( function( done ) {
			loadFeed( 0, done );
		} );
		/* This is our 6th test*/
		it( ' Test case #6 => loadFeed function works correctly', function() {
			const entryElement = document.querySelector( '.feed' );
			expect( entryElement.children.length > 0 ).toBe( true );
		} );

	} );
	/************************************suite #4 ************************************************************************************************/
	/* TODO: Write a test that ensures when a new feed is loaded
	 * by the loadFeed function that the content actually changes.
	 * Remember, loadFeed() is asynchronous.
	 */
	describe( 'Testing for <New Feed Selection> definitions -> ', function() {
		const feed = document.querySelector( '.feed' );
		beforeEach( function( done ) {
			loadFeed( 0, function() {
				startFeed = $( '.feed' ).find( allFeeds.url );
				done();
			} );
			loadFeed( 1, function() {
				endFeed = $( '.feed' ).find( allFeeds.url );
			} );
		} );
		/* This is our 7th test*/
		it( ' Test case #7 => loadFeed function content changes and is not equal', function() {
			expect( startFeed ).not.toBe( endFeed );

		} );

	} );

}() );
/************************************************************************************************************************************************/
