# Projeto-Fullstack

This is a React component named "App". It imports React, useEffect, useState, Video component, Firebase configuration and Firestore Lite API. 

The component defines a variable maxHeight, which is set to the height of the window if it is less than or equal to 800 pixels. 

Then, the component defines a state variable named "video" using the useState hook, which initializes to an empty array. 

The component defines an async function named "getVideos", which gets all documents from the "Videos" collection in Firestore, and maps each document's data to a new array named "videosList". Finally, the function sets the state of the "video" variable to "videosList".

The component uses the useEffect hook to call the "getVideos" function once when the component is mounted.

The component returns a div with class name "App" and a style that sets the maximum height to the value of maxHeight variable. Inside the div, there is another div with class name "app_videos", which renders each video item from the "video" state using the map function. Each video item is passed as props to the Video component.

There are also commented lines of code that seem to be example Video components, which are currently not being used in the app.