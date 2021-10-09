const vetor = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];


  let handleAge = (starDate, endDate, array) => {
    return array.age >= starDate && array.age <= endDate;
  };

  const YOUNG = 'young';
  const MID = 'mid';
  const OLD = 'old';

  const votersResults = (ageRange) => (acc, current) => ({
    ...acc,
    [ageRange]: {
      numVotes: current.voted
        ? acc[ageRange].numVotes + 1
        : acc[ageRange].numVotes,
      numPeople: acc[ageRange].numPeople + 1,
    },
  });

  let handleYoungSeparator = votersResults(YOUNG);
  let handleMidSeparator = votersResults(MID);
  let handleOldSeparator = votersResults(OLD);

 console.log(vetor.reduce(
    (acc, current) => {
      if (handleAge(18, 25, current)) {
        return handleYoungSeparator(acc, current);
      }

      if (handleAge(26, 35, current)) {
        return handleMidSeparator(acc, current);
      }

      if (handleAge(36, 55, current)) {
        return handleOldSeparator(acc, current);
      }
    },
    {
      [YOUNG]: { numVotes: 0, numPeople: 0 },
      [MID]: { numVotes: 0, numPeople: 0 },
      [OLD]: { numVotes: 0, numPeople: 0 },
    }
  ));