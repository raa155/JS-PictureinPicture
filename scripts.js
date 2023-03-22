
// Cache Elements from DOM
const videoElement = document.getElementById('video');
const startButton = document.getElementById('startButton');


// Prompt to Select a media stream, pass to video element and it will play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

// Event Listener for Start Button
startButton.addEventListener('click', async ()=> {
    // Disable Button 
    startButton.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    //Reset Button
    startButton.disabled = false;
});

//Onload

selectMediaStream();