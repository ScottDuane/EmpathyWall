import { EventEmitter } from 'events';
import { addButtonHover } from '../actions/alert_actions';
import { AppDispatcher } from '../dispatcher/dispatcher';
import { ADD_BUTTON_HOVER } from '../constants/alert_constants';

class AlertStore extends EventEmitter {
  constructor() {
    super();
    this.change_event = "change";
    this.addHovering = false;

    AppDispatcher.register( (payload) => {
      this.updateStore(payload);
    });
  };

  updateStore(payload) {
      switch (payload.actionType) {
        case ADD_BUTTON_HOVER:
          this.addHovering = !this.addHovering
          this.emit(this.change_event);
          break;
      }
  };

  getAddHoverState () {
    return this.addHovering;
  };

  addChangeListener(callback) {
    this.on(this.change_event, callback);
  };

  removeChangeListener(callback) {
    this.removeListener(this.change_event, callback);
  };
};

export default AlertStore;
