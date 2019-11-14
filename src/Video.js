import React, { Component } from "react";

export class Video extends Component {
  // componentDidMount(){
  //     Promise.all([
  //         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  //         faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  //         faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  //         faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  //         faceapi.nets.faceExpressionNet.loadFromUri('/models')
  //     ]).then(startVideo)
  // }

  componentDidMount() {
    this.startVideo();
  }
  //   startVideo = () => {
  //     const video = getElementById("video");
  //     navigator.getUserMedia(
  //       { video: {} },
  //       stream => (video.srcObject = stream),
  //       err => console.err(err)
  //     );
  //   };

  handlePlay = () => {
    const displaySize = { width: video.width, height: video.height };
  };

  // setInterval(async () => {
  //     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  //     const resizedDetections = faceapi.resizeResults(detections, displaySize)

  // }, 100)

  // setInterval(async () => {
  //     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

  //     let happy = detections[0].expressions.happy
  //     let surprised = detections[0].expressions.surprised
  //     let sad = detections[0].expressions.sad
  //     let neutral = detections[0].expressions.neutral
  //     let angry = detections[0].expressions.angry

  //     if(happy > surprised && happy > sad && happy > neutral && happy > angry){
  //         console.log('Your Honest Emoji is :')
  //         console.log('%c😄', 'font-size: 55px; font-family: futura')
  //     } else if (surprised > happy && surprised > sad && surprised > neutral && surprised > angry){
  //         console.log('Your Honest Emoji is :')
  //         console.log('%c😯', 'font-size: 55px; font-family: futura')
  //     } else if (sad > surprised && sad > happy && sad > neutral && sad > angry){
  //         console.log('Your Honest Emoji is :')
  //         console.log('%c😭', 'font-size: 55px; font-family: futura')
  //     } else if (angry > happy && angry > sad && angry > neutral && angry > surprised){
  //         console.log('Your Honest Emoji is :')
  //         console.log('%c😡', 'font-size: 55px; font-family: futura')
  //      } else {
  //         console.log('Your Honest Emoji is :')
  //         console.log('%c😐', 'font-size: 55px; font-family: futura')
  //     }
  // }, 1000)
  // }

  render() {
    return (
      <div>
        <Video onPlay={this.handlePlay}></Video>
      </div>
    );
  }
}

export default Video;
