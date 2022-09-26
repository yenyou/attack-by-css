
_vm = new Vue( {
    el: '#app',
    data: {
        styleText: '#app {background-color: red;}',
    },
    methods: {
        importCSS: importCSS
    },
} );

function importCSS() {
    const head = document.getElementsByTagName( 'head' )[0];
    const style = document.createElement( 'style' );
    console.log( style );
    style.appendChild( document.createTextNode( _vm.styleText ) );
    head.appendChild( style );
    console.log( head );

}