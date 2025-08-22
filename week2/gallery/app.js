console.log("hello!");

// TODO: i need to store my image date
// you can use imahes stored locally or images stored remotley (unsplash)

const images = [
  {
    url: "url1",
    alttext: text1,
  },
  {
    url: "url2",
    alttext: text2,
  },
  {
    url: "url3",
    alttext: text3,
  },
];

// TODO: i need to create my thumnail images

// function createThimbnauls(){
// select the DOM element (thumbnail-container) to contain our thumbnails
// this is a repetitve task --> loop through our array (using the length property)(image.length)

// inside are loop we need to do this:
// - create img ekement
// - update the src and alt attributes of the img elements to match those in the array (HINT - parameters)
// - give each img a className (HINT - append the created images to the thumbnail-container)
// - add an event lister to each image --> the event handler of this listerner is the function you write to create large images
// - append the create images to the thumbnail-containter
// }

// TODO: i neeed to create large images
// this task is the event handler for the thumbnail events
// function createLargeImagesHandler(){
// select the large-image-container
// delete the current image in the large-image-container
// largeImageContainer.innerHTML = null or ""
// create an image
// update the src and alt values
// ass a className for styling
// append the img to the container
//}

// add this event handler to the thumbnail event
// you call the createThumbnailfunction
