// console.log("hello");

window.onload = init;

function init() {

	var scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.25, 20 );
	
	camera.position.set( - 1.8, 0.9, 16 );

	var controls = new THREE.OrbitControls( camera );
	controls.autoRotate = true;

	// add a renderer with transparent background
	var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	// add the renderer element to the DOM so it is in our page
	document.body.appendChild( renderer.domElement );

	var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 10 );
	scene.add( light );

	// Instantiate a loader
	var loader = new THREE.GLTFLoader();

	// // Optional: Provide a DRACOLoader instance to decode compressed mesh data
	//THREE.DRACOLoader.setDecoderPath( '/examples/js/libs/draco' );
	//loader.setDRACOLoader( new THREE.DRACOLoader() );

	// Load a glTF resource
	loader.load(
		// resource URL
		'model/gltf/pipe.gltf',
		// called when the resource is loaded
		function ( gltf ) {

			scene.add( gltf.scene );

			render();

		},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
	);


	// RENDER THE SCENE
	var render = function () {
	  requestAnimationFrame( render );

	  controls.update();
	  renderer.render(scene, camera);
	
	};


}
