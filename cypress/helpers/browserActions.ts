class browserActions {
  static clickOnElement(el) {
    if (!el) return null; // Try to validate shit here...

    return el.click({force: true});
  }
}

export default browserActions;