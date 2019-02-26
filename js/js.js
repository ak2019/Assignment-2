var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
// mouse controls
var controls = new THREE.OrbitControls( camera );
controls.autoRotate = true;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add cube
var geometry = new THREE.OctahedronGeometry( 30 );
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 100;

var render = function () {
  requestAnimationFrame( render );

  controls.update();
  renderer.render(scene, camera);
};

render();