const Jasmin = {
  name: "Jasmin",
  job: "Awesome people person",
  past: "Astronaut",
  futureJob: "Who the hell knows"
};

const Dragos = {
  name: "Dragos",
  job: "Not a people person",
  past: "Astronaut",
  futureJob: "Head of fucking everytjing"
};

function printKeys(obj) {
  const printKey = (key) => console.log(`This is the key: ${key}`);

  Object.keys(obj).map(printKey);
}

function printValues(obj) {
  const printValue = (key) => console.log(obj[key]);

  Object.keys(obj).map(printValue);
}

printKeys(Jasmin);
printKeys(Dragos);
printValues(Jasmin);
printValues(Dragos);
console.log(Object.keys(Jasmin));

function funnyOne(callback) {
  // Here i am fetching some data
  callback();
}

funnyOne(() => console.log("Funny is running me"));
