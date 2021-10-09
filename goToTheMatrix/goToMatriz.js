const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
  ];
  
  const goToTheMatrix = people.map((people) =>
    people.age > 18
      ? `${people.name} can go to The Matrix`
      : `${people.name} is under age`
  );
  
  console.log(goToTheMatrix);