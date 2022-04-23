import pageObjects from '../pageObject/pageObjects';
import browserActions from './browserActions';

class datePickerActions {
  static selectToday() {
    browserActions.clickOnElement(pageObjects.getDepartureDatePicker());
    browserActions.clickOnElement(pageObjects.getTodayDatePicker());
  }
}

export default datePickerActions;