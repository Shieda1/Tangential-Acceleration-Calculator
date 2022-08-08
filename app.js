// https://calculator.swiftutors.com/tangential-acceleration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const tangentialAccelerationRadio = document.getElementById('tangentialAccelerationRadio');
const objectsCircularRadiusRadio = document.getElementById('objectsCircularRadiusRadio');
const angularAccelerationRadio = document.getElementById('angularAccelerationRadio');

let tangentialAcceleration;
let objectsCircularRadius = v1;
let angularAcceleration = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

tangentialAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Object\'s Circular Radius (m)';
  variable2.textContent = 'Angular Acceleration (rad/s²)';
  objectsCircularRadius = v1;
  angularAcceleration = v2;
  result.textContent = '';
});

objectsCircularRadiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangential Acceleration (m/s²)';
  variable2.textContent = 'Angular Acceleration (rad/s²)';
  tangentialAcceleration = v1;
  angularAcceleration = v2;
  result.textContent = '';
});

angularAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Tangential Acceleration (m/s²)';
  variable2.textContent = 'Object\'s Circular Radius (m)';
  tangentialAcceleration = v1;
  objectsCircularRadius = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(tangentialAccelerationRadio.checked)
    result.textContent = `Tangential Acceleration = ${computeTangentialAcceleration().toFixed(2)} m/s²`;

  else if(objectsCircularRadiusRadio.checked)
    result.textContent = `Object's Circular Radius = ${computeObjectsCircularRadius().toFixed(2)} m`;

  else if(angularAccelerationRadio.checked)
    result.textContent = `Angular Acceleration = ${computeAngularAcceleration().toFixed(2)} rad/s²`;
})

// calculation

function computeTangentialAcceleration() {
  return Number(objectsCircularRadius.value) * Number(angularAcceleration.value);
}

function computeObjectsCircularRadius() {
  return Number(tangentialAcceleration.value) / Number(angularAcceleration.value);
}

function computeAngularAcceleration() {
  return Number(tangentialAcceleration.value) / Number(objectsCircularRadius.value);
}