document.addEventListener('keydown', function(event) {
  const ball = document.querySelector('#ball').body;

  const applyForce = (body, forceVec) => {
    body.applyForce(new CANNON.Vec3(...forceVec), new CANNON.Vec3().copy(body.position));
  };

  switch (event.key) {
    case 'ArrowUp':
      applyForce(ball, [0, 0, -10]);
      break;
    case 'ArrowDown':
      applyForce(ball, [0, 0, 10]);
      break;
    case 'ArrowLeft':
      applyForce(ball, [-10, 0, 0]);
      break;
    case 'ArrowRight':
      applyForce(ball, [10, 0, 0]);
      break;
  }
});
