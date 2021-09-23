class Human {
  walk() {
    console.log('I walk like a human')
  }
}

class Employee extends Human { // we need to extend Human class
  goToBank() {
    super.walk();
    this.takeMoney();

    return 1000; // $
  }

  takeMoney() {
    console.log('Taking money...')
  }
}

export function goGetMoney_solution() {
  const maria = new Employee();

  return maria.goToBank();
}


/**
 * Check yourself:
 *
 * - could we replace super.walk() on line 9 with something else so that the code still works?
 */
