import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const needs = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/needs/react-flux-building-applications",
    authorId: "restry-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/needs/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/needs/architecting-applications-dotnet",
    authorId: "restry-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/needs/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/needs/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (need) => {
  return replaceAll(need.title, ' ', '-');
};

class NeedApi {
  static getAllNeeds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], needs));
      }, delay);
    });
  }

  static saveNeed(need) {
    need = Object.assign({}, need); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNeedTitleLength = 1;
        if (need.title.length < minNeedTitleLength) {
          reject(`Title must be at least ${minNeedTitleLength} characters.`);
        }

        if (need.id) {
          const existingNeedIndex = needs.findIndex(a => a.id == need.id);
          needs.splice(existingNeedIndex, 1, need);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new needs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          need.id = generateId(need);
          need.watchHref = `http://www.pluralsight.com/needs/${need.id}`;
          needs.push(need);
        }

        resolve(need);
      }, delay);
    });
  }

  static deleteNeed(needId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfNeedToDelete = needs.findIndex(need => {
          need.needId == needId;
        });
        needs.splice(indexOfNeedToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default NeedApi;
