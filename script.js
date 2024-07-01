document.addEventListener('keydown', function(event) {
  const tree = document.querySelector('[gltf-model="#treeModel"]').body;
  const house = document.querySelector('[gltf-model="#houseModel"]').body;
  const torus = document.querySelector('a-torus').body;
  const dodecahedron = document.querySelector('a-dodecahedron').body;

  const applyForce = (body, forceVec) => {
    body.applyForce(new CANNON.Vec3(...forceVec), new CANNON.Vec3().copy(body.position));
  };

  switch (event.key) {
    case 'ArrowUp':
      applyForce(tree, [0, 0, -5]);
      applyForce(house, [0, 0, -5]);
      applyForce(torus, [0, 0, -5]);
      applyForce(dodecahedron, [0, 0, -5]);
      break;
    case 'ArrowDown':
      applyForce(tree, [0, 0, 5]);
      applyForce(house, [0, 0, 5]);
      applyForce(torus, [0, 0, 5]);
      applyForce(dodecahedron, [0, 0, 5]);
      break;
    case 'ArrowLeft':
      applyForce(tree, [-5, 0, 0]);
      applyForce(house, [-5, 0, 0]);
      applyForce(torus, [-5, 0, 0]);
      applyForce(dodecahedron, [-5, 0, 0]);
      break;
    case 'ArrowRight':
      applyForce(tree, [5, 0, 0]);
      applyForce(house, [5, 0, 0]);
      applyForce(torus, [5, 0, 0]);
      applyForce(dodecahedron, [5, 0, 0]);
      break;
  }
});
