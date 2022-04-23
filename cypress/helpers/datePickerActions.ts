import pageObjects from '../pageObject/pageObjects';
import browserActions from './browserActions';

class datePickerActions {
  public static selectDepartureToday() {
    browserActions.clickOnElement(pageObjects.getDepartureDatePicker());
    browserActions.clickOnElement(pageObjects.getTodayDatePicker());
  }
  public static selectReturnDate(daysInTheFuture) {
    browserActions.clickOnElement(pageObjects.getReturnDatePicker());
    browserActions.clickOnElement(pageObjects.getDatePicker(daysInTheFuture));
  }
}

export default datePickerActions;