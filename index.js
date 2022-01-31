const findNarcissusFrom = (people) => {
  const narcissus = people.find((element) => element.know.length === 0);
  const name = narcissus ? narcissus.name : '';

  if (name) {
    let checks = 0;

    people.forEach((e) => {
      if (e.know.find((element) => element === name)) {
        checks += 1;
      }
    });

    return (checks === people.length - 1) ? name : '';
  } return name;
};
module.exports = findNarcissusFrom;
