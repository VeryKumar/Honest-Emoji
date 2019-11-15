const video = document.getElementById("video");
console.log("loaded");

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models")
])
  .then(console.log("loaded promises"))
  .then(startVideo);

const tokenProvider = new Chatkit.TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/aa2b3fbb-81a5-438c-95ae-7de73ab855e9/token"
});

const chatManager = new Chatkit.ChatManager({
  instanceLocator: "v1:us1:aa2b3fbb-81a5-438c-95ae-7de73ab855e9",
  userId: "varun",
  tokenProvider: tokenProvider
});

let currentUserObj = {};
chatManager
  .connect()
  .then(currentUser => {
    currentUserObj = currentUser;
    currentUser.subscribeToRoomMultipart({
      roomId: currentUser.rooms[0].id,
      hooks: {
        onMessage: message => {
          console.log("Received message:", message);
        }
      }
    });
  })
  .catch(error => {
    console.error("error:", error);
  });

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => (video.srcObject = stream),
    err => console.err(err)
  );
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);

  const emoji = "";
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    let happy = detections[0].expressions.happy;
    let surprised = detections[0].expressions.surprised;
    let sad = detections[0].expressions.sad;
    let neutral = detections[0].expressions.neutral;

    if (happy > surprised && happy > sad && happy > neutral) {
      console.log("Your Honest Emoji is :");
      console.log("%c😄", "font-size: 55px; font-family: futura");
      currentUserObj.sendSimpleMessage({
        text: "😄",
        roomId: currentUserObj.rooms[0].id
      });
    } else if (surprised > happy && surprised > sad && surprised > neutral) {
      console.log("Your Honest Emoji is :");
      console.log("%c😯", "font-size: 55px; font-family: futura");
      currentUserObj.sendSimpleMessage({
        text: "😯",
        roomId: currentUserObj.rooms[0].id
      });
    } else if (sad > surprised && sad > happy && sad > neutral) {
      console.log("Your Honest Emoji is :");
      console.log("%c😭", "font-size: 55px; font-family: futura");
      currentUserObj.sendSimpleMessage({
        text: "😭",
        roomId: currentUserObj.rooms[0].id
      });
    } else {
      console.log("Your Honest Emoji is :");
      console.log("%c😐", "font-size: 55px; font-family: futura");
      currentUserObj.sendSimpleMessage({
        text: "😐",
        roomId: currentUserObj.rooms[0].id
      });
    }
  }, 1000);
});
