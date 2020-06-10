
// var action;
// var clock = new THREE.Clock();
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
// // camera.position.z = 5;

// //PLANE
// var geometry = new THREE.PlaneGeometry(4, 4, 4);
// var material = new THREE.MeshPhongMaterial({ color: 'white', side: THREE.DoubleSide });
// var plane = new THREE.Mesh(geometry, material);
// plane.rotation.x = - Math.PI / 2;
// plane.position.set(0, -0.9, 0);
// scene.add(plane);

// //LIGHT
// var ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
// scene.add(ambientLight);
// light = new THREE.PointLight(0xffffff, 0.8, 18);
// light.position.set(0, 2, 4);
// light.castShadow = true;
// light.shadow.camera.near = 0.1;
// light.shadow.camera.far = 25;
// scene.add(light);
// camera.position.z = 5;
// camera.position.set(0, 0, 5);

// // orbit 3d env

// var controls = new THREE.OrbitControls(camera);
// controls.update();

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth / 1.2, window.innerHeight / 1.2);
// document.body.appendChild(renderer.domElement);   //in react use ref
// renderer.setClearColor('white');


// // GLTF loader 

// var loader = new THREE.GLTFLoader();

// loader.load('tern_construct_animation.gltf', function (gltf) {

//   // Taking animations from  gltf

//   mixer = new THREE.AnimationMixer(gltf.scene);

//   var action = mixer.clipAction(gltf.animations[1]);   //getting single animation
//   action.play();

//   scene.add(gltf.scene);
//   action.setLoop(THREE.LoopOnce);
//   gltf.scene.position.set(0, 0, 0);


//   //-- Playing all animations of gltf 

//   // gltf.animations.forEach((clip) => {
//   //   mixer
//   //     .clipAction(clip)
//   //     .play();
//   //   // alert(clip)
//   // });

// },
// );

// var animate = () => {

//   requestAnimationFrame(animate);

//   var delta = clock.getDelta();
//   if (mixer !== null) {
//     mixer.update(delta);
//   };
//   renderer.render(scene, camera);
// };

// animate();

