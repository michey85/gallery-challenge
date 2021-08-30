# Demo task for Barcelona's company

To run the working demo
```
npm install

npm run dev
```

## What and why

### Structure
For this project I chose [feature-sliced](https://feature-sliced.design/en/) approach. It's modern, scalable and easy to maintain methodology for designing frontend projects.

The app contains different levels of logic:
- shared - store, api's, config, hooks (also could contain UI atomic elements, but I use a library)
- entities - main UI elements (cards, lists etc.), based on shared UI
- features - UI elements with business logic
- widgets - composition of UI elements

Feature-sliced approach also has a `page` folder, but for our purposes I decided to use just `app` component, because we don't have pages yet.


### UI
I use [Chakra UI](https://chakra-ui.com/) library. It based on `ccs-in-js` approach and on [styled-system](https://styled-system.com/) theming features.

It's very easy to create responsive layout, just using props for UI components.


### Store
I use [redux-toolkit](https://redux-toolkit.js.org/) for global state like modern way to work with `Redux`. And also I use very new redux-toolkit feature [RTK query](https://redux-toolkit.js.org/rtk-query/overview) for API requests. It has built-in cache, auto-refetch data and many other cool staff.


### Server
I actually don't have a real server, because I worked on Frontend part. But I use [json-server](https://www.npmjs.com/package/json-server) for mocking data. It's really powerfull with all HTTP methods and a search.

## Challenge details (with my comments)
1. **The gallery will contain different types of files: images, audio and videos.**
I decided not create Pixel perfect design, because I had just a picture. I had a lot of questions on it, but I focused on functionality.

2. **The user should be able to filter the files by name.**
Done.

3. **The user should be able to filter by file type.**
Done.

4. **The gallery should allow to download the resources item by item.**
I have download button in a "file viewer", but this is just a redirect. It will work if all file would be on the same server as the app.

5. **The gallery should have two kind of views, list view and thumbnail view.**
Done. But I didn't try to do a good-looking list view.

6. **All files can be viewed by a "file viewer", and will be displayed inside a modal container.**
Done.

7. **The client will be able to navigate between files from file viewer.**
Done.

8. **The gallery should upload images or videos through a form and then display them in the gallery.**
Done. Resources can be uploaded by http link. Any picture, but for video for now it's just a `YouTube` links. I think on a real project you already have a UI Video component (with a lot of options it takes a long time to create it), for this one I just use `iframe`. Same story with audio. For now it's just a simple `audio` html5 tag.