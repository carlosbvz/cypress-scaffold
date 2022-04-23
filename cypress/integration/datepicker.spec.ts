import datePickerActions from '../helpers/datePickerActions';

const daysInTheFuture = 5;


describe('My First Test', () => {
  it('Does not do much!', () => {

    // You will use the base URL and then navigate to where you want to test.
    cy.visit("https://www.cheapoair.com/flights/booknow/cheap-flight-tickets")

    // First DropDown
    datePickerActions.selectDepartureToday();

    // Second DropDown
    datePickerActions.selectReturnDate(daysInTheFuture);


    expect(true).to.equal(true)
  })
})