console.log("hello world");

// TODO: I need to store my images data
// You can use images stored locally or images stored remotely (unsplash...)

const images = [
  {
    url: "url1", // Relative path for local images OR link to the image
    altText: "altText1",
  },
  {
    url: "url2",
    altText: "altText2",
  },
  {
    url: "url3",
    altText: "altText3",
  },
];
// TODO: I need to create my thumbnail images
// Function createThumbnails(){✅
// Select the DOM element (thumbnail-container) to contain our thumbnails✅
// This is a repetitive task --> loop through our array (using the length property)✅
// Inside our loop we need to do this:
// - Create img element✅
// - Update the src and alt attributes of the img element to match those in the array (parameters)✅
// - Give each img a className (img.className)✅
// - Add an event listener to each image --> the event handler of this listener is the functionyou write to create large images✅
// - Append the created images to the thumbnail-container✅
// }

// TODO: I need to create my large images
// This task is the event handler for the thumbnail events
// Function createLargeImagesHandler(){✅
// Select the large-image-container✅
// Delete the current image in the large-image-container✅
// LargeImageContainer.innerHTML = null OR ""✅
// Create an image✅
// Update the src and alt values✅
// Add a className for styling✅
// Append the img to the container✅
// }

// Add this event handler to the thumbanil event
// You call the createThumbanils function
