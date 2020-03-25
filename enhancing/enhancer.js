module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if (item.enhancement >= 20) {
    return item;
  }
  else {
    return {...item, enhancement: item.enhancement + 1}
  }

}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability-= 5;
  }
  else if (item.enhancement >= 15) {
    item.durability-= 10;

    if (item.enhancement > 16) {
      item.enhancement-=1
    }
  }

  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
