const video5 = document.getElementsByClassName('input_video5')[0];
const out5 = document.getElementsByClassName('output5')[0];
const controlsElement5 = document.getElementsByClassName('control5')[0];
const canvasCtx5 = out5.getContext('2d');

const fpsControl = new FPS();

let horizontal = false;
let vetical = false;

const spinner = document.querySelector('.loading');
spinner.ontransitionend = () => {
  spinner.style.display = 'none';
};

function zColor(data) {
  const z = clamp(data.from.z + 0.5, 0, 1);
  return `rgba(0, ${255 * z}, ${255 * (1 - z)}, 1)`;
}

function onResultsPose(results) {
  // console.log("Nariz: ", results.poseLandmarks[0])
  // console.log("Ombro Esquerdo: ", results.poseLandmarks[11])
  // console.log("Ombro Direiro: ", results.poseLandmarks[12])
  // console.log("Quadril Esquerdo: ", results.poseLandmarks[23])
  // console.log("Quadril Direiro: ", results.poseLandmarks[24])



  if (results.poseLandmarks[0]) {

    if (results.poseLandmarks[0].x < 0.30 || results.poseLandmarks[0].x > 0.70) {
      // Comandos para esquerda
      if (results.poseLandmarks[0].x < 0.03) {
        console.log("LEFT v10");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.06) {
        console.log("LEFT v9");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&9&9', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.09) {
        console.log("LEFT v8");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&8&8', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.12) {
        console.log("LEFT v7");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&7&7', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.15) {
        console.log("LEFT v6");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&6&6', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.18) {
        console.log("LEFT v5");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&5&5', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.21) {
        console.log("LEFT v4");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&4&4', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.24) {
        console.log("LEFT v3");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&3&3', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.27) {
        console.log("LEFT v2");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&2&2', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x < 0.30) {
        console.log("LEFT v1");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&left&1&1', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      }
      // Comando para direita
      else if (results.poseLandmarks[0].x > 0.97) {
        console.log("RIGHT v10");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.94) {
        console.log("RIGHT v9");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&9&9', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.91) {
        console.log("RIGHT v8");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&8&8', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.88) {
        console.log("RIGHT v7");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&7&7', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.85) {
        console.log("RIGHT v6");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&6&6', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.82) {
        console.log("RIGHT v5");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&5&5', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.79) {
        console.log("RIGHT v4");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&4&4', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.76) {
        console.log("RIGHT v3");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&2&2', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.73) {
        console.log("RIGHT v2");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&2&2', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].x > 0.70) {
        console.log("RIGHT v1");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&right&1&1', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      }
      horizontal = true;
    }

    if (results.poseLandmarks[0].y < 0.35 || results.poseLandmarks[0].y > 0.50) {
      // Comandos para cima
      if (results.poseLandmarks[0].y < 0.035) {
        console.log("UP v10");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.07) {
        console.log("UP v9");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&9&9', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.105) {
        console.log("UP v8");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&8&8', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.14) {
        console.log("UP v7");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&7&7', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.175) {
        console.log("UP v6");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&6&6', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.21) {
        console.log("UP v5");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&5&5', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.245) {
        console.log("UP v4");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&4&4', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.28) {
        console.log("UP v3");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&3&3', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.315) {
        console.log("UP v2");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&2&2', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y < 0.35) {
        console.log("UP v1");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&up&1&1', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      }

      // Comando para baixo
      else if (results.poseLandmarks[0].y > 0.95) {
        console.log("DOWN v10");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.90) {
        console.log("down v9");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&9&9', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.85) {
        console.log("down v8");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&8&8', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.80) {
        console.log("down v7");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&7&7', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.75) {
        console.log("down v6");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&6&6', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.70) {
        console.log("down v5");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&5&5', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.65) {
        console.log("down v4");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&4&4', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.60) {
        console.log("down v3");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&3&3', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.55) {
        console.log("down v2");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&2&2', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      } else if (results.poseLandmarks[0].y > 0.50) {
        console.log("down v1");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&down&1&1', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
      }
      vetical = true;
    }

    if (vetical) {
      if (results.poseLandmarks[0].y > 0.38 && results.poseLandmarks[0].y < 0.42) {
        console.log("STOP");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&ptzstop&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
        vetical = false;
      }
    }
    if (horizontal) {
      if (results.poseLandmarks[0].x < 0.52 && results.poseLandmarks[0].x > 0.48) {
        console.log("STOP");
        fetch('http://192.168.100.88/cgi-bin/ptzctrl.cgi?ptzcmd&ptzstop&10&10', { method: 'GET' })
          .then(response => response.text())
          .then(texto => console.log(texto))
          .catch(err => console.log(err.message))
        horizontal = false;
      }
    }
  } else {
    console.log("STOP - OBJETO FORA");
  }

  document.body.classList.add('loaded');
  fpsControl.tick();

  canvasCtx5.save();
  canvasCtx5.clearRect(0, 0, out5.width, out5.height);
  canvasCtx5.drawImage(
    results.image, 0, 0, out5.width, out5.height);
  drawConnectors(
    canvasCtx5, results.poseLandmarks, POSE_CONNECTIONS, {
    color: (data) => {
      const x0 = out5.width * data.from.x;
      const y0 = out5.height * data.from.y;
      const x1 = out5.width * data.to.x;
      const y1 = out5.height * data.to.y;

      const z0 = clamp(data.from.z + 0.5, 0, 1);
      const z1 = clamp(data.to.z + 0.5, 0, 1);

      const gradient = canvasCtx5.createLinearGradient(x0, y0, x1, y1);
      gradient.addColorStop(
        0, `rgba(0, ${255 * z0}, ${255 * (1 - z0)}, 1)`);
      gradient.addColorStop(
        1.0, `rgba(0, ${255 * z1}, ${255 * (1 - z1)}, 1)`);
      return gradient;
    }
  });
  drawLandmarks(
    canvasCtx5,
    Object.values(POSE_LANDMARKS_LEFT)
      .map(index => results.poseLandmarks[index]),
    { color: zColor, fillColor: '#FF0000' });
  drawLandmarks(
    canvasCtx5,
    Object.values(POSE_LANDMARKS_RIGHT)
      .map(index => results.poseLandmarks[index]),
    { color: zColor, fillColor: '#00FF00' });
  drawLandmarks(
    canvasCtx5,
    Object.values(POSE_LANDMARKS_NEUTRAL)
      .map(index => results.poseLandmarks[index]),
    { color: zColor, fillColor: '#AAAAAA' });
  canvasCtx5.restore();
}

const pose = new Pose({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.2/${file}`;
  }
});
pose.onResults(onResultsPose);

const camera = new Camera(video5, {
  onFrame: async () => {
    await pose.send({ image: video5 });
  },
  width: 1920,
  height: 1080
});
camera.start();



new ControlPanel(controlsElement5, {
  selfieMode: true,
  upperBodyOnly: false,
  modelComplexity: 2,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
})
  .add([
    new StaticText({ title: 'MediaPipe Pose' }),
    fpsControl,
    new Toggle({ title: 'Selfie Mode', field: 'selfieMode' }),
    new Toggle({ title: 'Upper-body Only', field: 'upperBodyOnly' }),
    new Toggle({ title: 'Smooth Landmarks', field: 'smoothLandmarks' }),
    new Slider({
      title: 'Min Detection Confidence',
      field: 'minDetectionConfidence',
      range: [0, 1],
      step: 0.01
    }),
    new Slider({
      title: 'Min Tracking Confidence',
      field: 'minTrackingConfidence',
      range: [0, 1],
      step: 0.01
    }),
  ])
  .on(options => {
    video5.classList.toggle('selfie', options.selfieMode);
    pose.setOptions(options);
  });
