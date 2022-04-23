//  #1 Test
import datePickerActions from '../helpers/datePickerActions';


// Change this var to select a future date
const daysInTheFuture = 5;


describe('test datepicker', () => {
  it('Changes Date', () => {

    // You will use the base URL and then navigate to where you want to test.
    cy.visit("https://www.cheapoair.com/flights/booknow/cheap-flight-tickets")
    // First DropDown
    datePickerActions.selectDepartureToday();
    // Second DropDown
    datePickerActions.selectReturnDate(daysInTheFuture);

    // After changing the dropdowns... you can test for something else... like those reports being loaded in the page
    expect(true).to.equal(true)
  })
})