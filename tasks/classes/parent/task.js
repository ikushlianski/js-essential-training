/**
 * Task
 *
 * Fix one line in one of the classes so that `goGetMoney` function returns 1000
 */

class Human {
  walk() {
    console.log('I walk like a human')
  }
}

class Employee {
  goToBank() {
    super.walk();
    this.takeMoney();

    return 1000; // $
  }

  takeMoney() {
    console.log('Taking money...')
  }
}

export function goGetMoney() {
  const maria = new Employee();

  return maria.goToBank();
}
