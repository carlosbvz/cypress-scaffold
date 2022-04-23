
/**
 * This is kinda lika you got in the pageObject folder, 
 * The idea here is to have a reusable way to find DOM elements... 
 * You will need to take a look at the DOM... and find a clever way to locate a DOM element.
 * Read: https://docs.cypress.io/api/commands/get#Yields
 * Your projects uses classes and Ids... and other shit... like html tags... This is not a good practice.
 * For a Good practice and testing selectors Read: 
 * https://docs.cypress.io/guides/references/best-practices
 */
 class pageObjects {
  public static getDepartureDatePicker() {
    return cy.get(".calendarswapbtn input").eq(0);
  }
  public static getTodayDatePicker() {
    return cy.get("a.is--today");
  }
}

export default pageObjects;