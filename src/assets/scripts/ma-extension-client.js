/******************************* Order Status Screen : start *******************************/
function OrderStatus() {
    // Events
    Events.prototype.onPageLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.ORDER_STATUS_SCREEN, iframeConstants.ORDER_STATUS_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    Actions.prototype.reloadPage = function (payload) {
        var receivedData = { screenId: iframeConstants.ORDER_STATUS_SCREEN, action: iframeConstants.ORDER_STATUS_ACTION_RELOAD, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }
    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Order Status Screen : end *******************************/

/******************************* XO Order Status Screen : start *******************************/
function XOOrderStatus() {
    // Events
    Events.prototype.onPageLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.EXCHANGE_STATUS_SCREEN, iframeConstants.XO_ORDER_STATUS_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    Actions.prototype.reloadPage = function (payload) {
        var receivedData = { screenId: iframeConstants.ORDER_STATUS_SCREEN, action: iframeConstants.ORDER_STATUS_ACTION_RELOAD, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }
    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* XO Order Status Screen : end *******************************/

/******************************* Customer transaction Screen : start *******************************/
function CustomerTransaction() {
    // Events
    Events.prototype.onPageLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.CUSTOMER_TRANSACTION_SCREEN, iframeConstants.CUSTOMER_TRANSACTION_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }
    Events.prototype.onOrderSelected = function (functionRef, scope) {
        registerMethods(iframeConstants.CUSTOMER_TRANSACTION_SCREEN, iframeConstants.CUSTOMER_TRANSACTION_SCREEN_EVENT_ORDER_SELECTED, functionRef, scope);
    }

    // Actions
    Actions.prototype.reloadPage = function (payload) {
        var receivedData = { screenId: iframeConstants.CUSTOMER_TRANSACTION_SCREEN, action: iframeConstants.CUSTOMER_TRANSACTION_SCREEN_ACTION_RELOAD, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Customer transaction Screen : end *******************************/

/******************************* Edit Order Screen : start *******************************/
function EditOrder() {
    /* Events */
    Events.prototype.onPageLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    Events.prototype.onProceedToSummary = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_SUMMARY, functionRef, scope);
    }

    Events.prototype.onProceedToPayment = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_PAYMENT, functionRef, scope);
    }

    Events.prototype.onPlaceOrder = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_PLACE_ORDER, functionRef, scope);
    }

    Events.prototype.onConfirmOrder = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_CONFIRM_ORDER, functionRef, scope);
    }

    Events.prototype.onShippingTabSelected = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_SHIPPING_TAB_SELECTED, functionRef, scope);
    }

    Events.prototype.onPaymentTabSelected = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_PAYMENT_TAB_SELECTED, functionRef, scope);
    }

    Events.prototype.onSummaryTabSelected = function (functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_SUMMARY_TAB_SELECTED, functionRef, scope);
    }

    Events.prototype.staUsedAddressShippingSectionLoaded = function(functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_LINES_LOADED_STA, functionRef, scope);
    }

    Events.prototype.stsUsedAddressShippingSectionLoaded = function(functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_LINES_LOADED_STS, functionRef, scope);
    }

    Events.prototype.onAddressPanelLoaded = function(functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.EDIT_ORDER_SCREEN_EVENT_ADDRESS_PANEL_LOADED, functionRef, scope);
    }

    Events.prototype.onPaymentAccordianExpand = function(functionRef, scope) {
        registerMethods(iframeConstants.EDIT_ORDER_SCREEN, iframeConstants.PAYMENT_ACCORDIAN_EXPANDED, functionRef, scope);
    }
    /* Actions */

    Actions.prototype.ackProceedToSummary = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_PROCEED_TO_SUMMARY, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.ackPlaceOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_PLACE_ORDER, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.ackConfirmOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_CONFIRM_ORDER, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.ackProceedToPayment = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_PROCEED_TO_PAYMENT, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.reloadPage = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_RELOAD, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.saveOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_SAVE_ORDER, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.saveAddress = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_SAVE_ADDRESS, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.updateAddress = function (payload) {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_UPDATE_ADDRESS, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.closeAddress = function () {
        var receivedData = { screenId: iframeConstants.EDIT_ORDER_SCREEN, action: iframeConstants.EDIT_ORDER_SCREEN_ACTION_ClOSE_ADDRESS};
        parent.window.postMessage({ receivedData }, '*');
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Edit Order Screen : end *******************************/

/******************************* Item search Screen : start *******************************/
function ItemSearch() {
    //Events
    Events.prototype.onPageLoad = function (functionRef) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SCREEN_EVENT_ON_LOAD, functionRef);
    }

    Events.prototype.onItemLoad = function (functionRef) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_ON_LOAD, functionRef);
    }

    Events.prototype.onAddItem = function (functionRef, scope) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_ADD_ITEM, functionRef, scope);
    }

    Events.prototype.onItemAdded = function (functionRef, scope) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_ON_ITEM_ADDED, functionRef, scope);
    }
    
    Events.prototype.onAddItemAndCheckout = function (functionRef, scope) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_ADD_ITEM_AND_CHECKOUT, functionRef, scope);
    }

    Events.prototype.onItemAddedAndCheckedOut = function (functionRef, scope) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_ON_ITEM_ADDED_AND_CHECKED_OUT, functionRef, scope);
    }
    
    Events.prototype.onCheckout = function (functionRef, scope) {
        registerMethods(iframeConstants.ITEM_SEARCH_SCREEN, iframeConstants.ITEM_SEARCH_SCREEN_EVENT_CHECKOUT, functionRef, scope);
    }



    //Actions
    Actions.prototype.addItem = function (Order, itemId) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ADD_ITEM, payload: { "Order": Order, "itemId": itemId } };
        parent.window.postMessage({ receivedData }, '*');
    }


    Actions.prototype.addItemAndCheckout = function (Order, itemId) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ADD_ITEM_AND_CHECKOUT, payload: { "Order": Order, "itemId": itemId } };
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.ackItemAddedAndCheckedOut = function (payload) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ACK_ITEM_ADDED_AND_CHECKED_OUT, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    //Actions
    Actions.prototype.ackAddItem = function (payload) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ACK_ADD_ITEM, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    //Actions
    Actions.prototype.ackAddItemAndCheckout = function (payload) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ACK_ADD_ITEM_AND_CHECKOUT, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }

    //Actions
    Actions.prototype.ackCheckout = function (payload) {
        var receivedData = { screenId: iframeConstants.ITEM_SEARCH_SCREEN, action: iframeConstants.ITEM_SEARCH_SCREEN_ACTION_ACK_CHECKOUT, payload: payload };
        parent.window.postMessage({ receivedData }, '*');
    }
    
    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Item search Screen : end *******************************/


/******************************* Appeasement Popup Screen : start *******************************/
function AppeasementPopup() {
    // Events
    // onPopupLoad event is fired upon add appeasement button clicked in popup accepts params - functonalref - reference of the iframe function and scope for payload
    Events.prototype.onPopupLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.APPEASEMENT_POPUP_SCREEN, iframeConstants.APPEASEMENT_POPUP_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    // onRefreshOrderData action is for refreshing the order data on post appeasement applied
    Actions.prototype.onRefreshOrderData = function () {
        var receivedData = { screenId: iframeConstants.APPEASEMENT_POPUP_SCREEN, action: iframeConstants.APPEASEMENT_POPUP_SCREEN_REFRESH_ORDER_DATA };
        parent.window.postMessage({ receivedData }, '*')
    }

    // onAppeasementApplied action is for saving the order details with appeasement applied based on the payload - payload has updated order object and type of order (line/header)
    Actions.prototype.onAppeasementApplied = function (payload) {
        var receivedData = { screenId: iframeConstants.APPEASEMENT_POPUP_SCREEN, action: iframeConstants.APPEASEMENT_POPUP_SCREEN_ON_APPEASEMENT_APPLIED, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    // refreshData action is for refreshing the order by order ID which is send as payload
    Actions.prototype.refreshData = function (payload) {
        var receivedData = { screenId: iframeConstants.APPEASEMENT_POPUP_SCREEN, action: iframeConstants.APPEASEMENT_POPUP_ACTION_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    // cancelAppeasement action is to close the appeasement form panel
    Actions.prototype.cancelAppeasement = function () {
        var receivedData = { screenId: iframeConstants.APPEASEMENT_POPUP_SCREEN, action: iframeConstants.APPEASEMENT_POPUP_SCREEN_ON_APPEASEMENT_CANCELED};
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Appeasement Popup Screen : end *******************************/

/******************************* Coupons Popup Screen : start *******************************/
function CouponsPopup() {
    // Events
    Events.prototype.onPopupLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.COUPONS_POPUP_SCREEN, iframeConstants.COUPONS_POPUP_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Events
    Events.prototype.onCouponsApplied = function (functionRef, scope) {
        registerMethods(iframeConstants.COUPONS_POPUP_SCREEN, iframeConstants.COUPONS_POPUP_SCREEN_ON_COUPONS_APPLIED, functionRef, scope);
    }

    // Actions
    Actions.prototype.refreshData = function (payload) {
        var receivedData = { screenId: iframeConstants.COUPONS_POPUP_SCREEN, action: iframeConstants.COUPONS_POPUP_ACTION_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.closePopup = function () {
        var receivedData = { screenId: iframeConstants.COUPONS_POPUP_SCREEN, action: iframeConstants.COUPONS_POPUP_ACTION_CLOSE };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Coupons Popup Screen : end *******************************/
/******************************* AVS Popup Screen : start *******************************/
function AVSVerificationPopup() {
    // Events
    Events.prototype.onAVSPopupLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.AVS_POPUP_SCREEN, iframeConstants.AVS_POPUP_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    Actions.prototype.saveOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.AVS_POPUP_SCREEN, action: iframeConstants.AVS_POPUP_ACTION_SAVE_ORDER, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Coupons Popup Screen : end *******************************/

/******************************* CSR Dashboard Screen : start *******************************/
function CallCenterHome() {

    // Actions
    Actions.prototype.showCustomerResults = function (payload) {
        var receivedData = { screenId: iframeConstants.CALL_CENTER_HOME_SCREEN, action: iframeConstants.CALL_CENTER_HOME_SCREEN_ACTION_SHOW_CUSTOMER_RESULTS, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.showCustomerLoadingMask = function () {
        var receivedData = { screenId: iframeConstants.CALL_CENTER_HOME_SCREEN, action: iframeConstants.CALL_CENTER_HOME_SCREEN_ACTION_SHOW_CUSTOMERS_LOADING_MASK };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* CSR Dashboard Screen : end *******************************/

/******************************* Customer Popup : start *******************************/
function CustomerPopup() {

    //Events
    Events.prototype.onPopupLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.CUSTOMER_POPUP_SCREEN, iframeConstants.CUSTOMER_POPUP_SCREEN_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    Actions.prototype.updateCustomer = function (payload) {
        var receivedData = { screenId: iframeConstants.CUSTOMER_POPUP_SCREEN, action: iframeConstants.CUSTOMER_POPUP_SCREEN_ACTION_UPDATE_CUSTOMER, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Customer Popup Screen : end *******************************/

/******************************* Override price Popup : start *******************************/
function OverridePricerPopup() {

    //Events
    Events.prototype.onPopupLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.OVERRIDE_PRICE_SCREEN, iframeConstants.OVERRIDE_PRICE_POPUP_EVENT_ON_LOAD, functionRef, scope);
    }

    // Actions
    
    Actions.prototype.close = function (payload) {
        var receivedData = { screenId: iframeConstants.OVERRIDE_PRICE_SCREEN, action: iframeConstants.POPUPS_SCREEN_CLOSE, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.refresh = function (payload) {
        var receivedData = { screenId: iframeConstants.OVERRIDE_PRICE_SCREEN, action: iframeConstants.POPUPS_SCREEN_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.closeAndRefresh = function (payload) {
        var receivedData = { screenId: iframeConstants.OVERRIDE_PRICE_SCREEN, action: iframeConstants.POPUPS_SCREEN_CLOSE_AND_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }
    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Override price Popup Screen : end *******************************/

/******************************* Create Return Screen: start *******************************/
function CreateReturn() {

    //Events
    Events.prototype.onOrderLoad = function (functionRef, scope) {
        registerMethods(iframeConstants.CREATE_RETURN_SCREEN, iframeConstants.CREATE_RETURN_SCREEN_EVENT_ON_ORDER_LOAD, functionRef, scope);
    }

    Events.prototype.onConfirmOrder = function (functionRef, scope) {
        registerMethods(iframeConstants.CREATE_RETURN_SCREEN, iframeConstants.CREATE_RETURN_SCREEN_EVENT_ON_CONFIRM_ORDER, functionRef, scope);
    }

    Events.prototype.onAddressPanelLoaded = function(functionRef, scope) {
        registerMethods(iframeConstants.CREATE_RETURN_SCREEN, iframeConstants.CREATE_RETURN_SCREEN_EVENT_ADDRESS_PANEL_LOADED, functionRef, scope);
    }
    Events.prototype.returnTypeChangeEvent = function(functionRef, scope) {
        registerMethods(iframeConstants.CREATE_RETURN_SCREEN, iframeConstants.RETURN_TYPE_CHANGE_EVENT, functionRef, scope);
    }
    Events.prototype.doneClicked = function(functionRef, scope){
        registerMethods(iframeConstants.CREATE_RETURN_SCREEN, iframeConstants.CREATE_RETURN_SCREEN_EVENT_ON_DONE_CLICKED, functionRef, scope);
    }
    // Actions
    Actions.prototype.saveOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_SAVE_ORDER, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.ackConfirmOrder = function (payload) {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_ACK_CONFIRM_ORDER, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.saveAddress = function (payload) {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_SAVE_ADDRESS, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.updateShipToAddress = function (payload) {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_UPDATE_SHIP_TO_ADDRESS, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.updateReturnFromAddress = function (payload) {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_UPDATE_RETURN_FROM_ADDRESS, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.closeReturnTabAddress = function () {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_ClOSE_SHIP_TO_TAB_ADDRESS};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.closeShipToTabAddress = function () {
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_ClOSE_RETURN_FROM_TAB_ADDRESS};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.ackDone = function (payload){
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_ACK_RETURN_FROM_DONE_CLICKED, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    Actions.prototype.returnCreated = function (payload){
        var receivedData = { screenId: iframeConstants.CREATE_RETURN_SCREEN, action: iframeConstants.CREATE_RETURN_SCREEN_ACTION_RETURN_CREATED, payload: payload};
        parent.window.postMessage({ receivedData }, '*');
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Create Return Screen : end *******************************/

/******************************* Popups Screen: start *******************************/
function Popups() {

    // Actions
    Actions.prototype.open = function (payload) {
        var receivedData = { screenId: iframeConstants.POPUPS_SCREEN, action: iframeConstants.POPUPS_SCREEN_OPEN, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.close = function (payload) {
        var receivedData = { screenId: iframeConstants.POPUPS_SCREEN, action: iframeConstants.POPUPS_SCREEN_CLOSE, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.refresh = function (payload) {
        var receivedData = { screenId: iframeConstants.POPUPS_SCREEN, action: iframeConstants.POPUPS_SCREEN_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    Actions.prototype.closeAndRefresh = function (payload) {
        var receivedData = { screenId: iframeConstants.POPUPS_SCREEN, action: iframeConstants.POPUPS_SCREEN_CLOSE_AND_REFRESH, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Events() { }

    function Actions() { }

    this.events = new Events();
    this.actions = new Actions();
}
/******************************* Popups Screen : end *******************************/

/******************************* Application: start *******************************/
function Application() {

    // Actions
    Actions.prototype.route = function (payload) {
        var receivedData = { screenId: iframeConstants.APPLICATION, action: iframeConstants.APPLICATION_ROUTE, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Actions() { }

    this.actions = new Actions();
}
/******************************* Application: end *******************************/

/******************************* Window: start *******************************/
function Window() {

    // Actions
    Actions.prototype.reloadURL = function (payload) {
        var receivedData = { screenId: iframeConstants.WINDOW, action: iframeConstants.WINDOW_RELOAD_URL, payload: payload };
        parent.window.postMessage({ receivedData }, '*')
    }

    function Actions() { }

    this.actions = new Actions();
}
/******************************* Window: end *******************************/

var screenIdEventIdMethodMap = new Object();
var iframeConstants = new IframeConstants();
var AppRoutes = new RouteConstants();

function MAExtension() {
    // console.log("sample-extensions-ma/assets/scripts/ma-extension-client.js is loaded");
    this.OrderStatusScreen = new OrderStatus();
    this.XOOrderStatusScreen = new XOOrderStatus();
    this.EditOrderScreen = new EditOrder();
    this.ItemSearchScreen = new ItemSearch();
    this.CustomerTransaction = new CustomerTransaction();
    this.CouponsPopupScreen = new CouponsPopup();
    this.AppeasementPopupScreen = new AppeasementPopup();
    this.AVSVerificationPopupScreen = new AVSVerificationPopup();
    this.CallCenterHomeScreen = new CallCenterHome();
    this.CustomerPopupScreen = new CustomerPopup();
    this.CreateReturnScreen = new CreateReturn();
    this.PopupsScreen = new Popups();
    this.OverridePricePopupScreen = new OverridePricerPopup();
    this.Application = new Application();
    this.Window = new Window();
}
function registerMethods(screenId, eventId, functionRef, scope) {
    var eventIdMap = new Object();
    if (screenIdEventIdMethodMap[screenId]) {
        if (!(screenIdEventIdMethodMap[screenId])[eventId]) {
            eventIdMap[eventId] = [];
            eventIdMap[eventId].push(functionRef);
            eventIdMap[eventId].ref = scope;
            (screenIdEventIdMethodMap[screenId])[eventId] = eventIdMap[eventId];
        }
    } else {
        eventIdMap[eventId] = []
        eventIdMap[eventId].push(functionRef);
        eventIdMap[eventId].ref = scope;
        screenIdEventIdMethodMap[screenId] = eventIdMap;
    }
}
function triggerMethods(event) {
    if (screenIdEventIdMethodMap[event.data.screenId] && (screenIdEventIdMethodMap[event.data.screenId])[event.data.eventName]) {
        for (var i = 0; i < (screenIdEventIdMethodMap[event.data.screenId])[event.data.eventName].length; i++) {
            ((screenIdEventIdMethodMap[event.data.screenId])[event.data.eventName])[i].call((screenIdEventIdMethodMap[event.data.screenId])[event.data.eventName].ref, event.data);
        }
    }
}

//Event Listener for post message.
window.addEventListener('message', receiveMessage, false);

//Post message receive
function receiveMessage(event) {
    triggerMethods(event);
}

var MAExtension = new MAExtension();

function IframeConstants() {
    //order status screen constants : START
    this.ORDER_STATUS_SCREEN = "ds::customer-order-status";
    this.EXCHANGE_STATUS_SCREEN = "ds::exchange-order-status";
    this.ORDER_STATUS_SCREEN_EVENT_ON_LOAD = "orderStatusLoad";
    this.XO_ORDER_STATUS_SCREEN_EVENT_ON_LOAD = "xoOrderStatusLoad";
    this.ORDER_STATUS_ACTION_RELOAD = "Reload";
    //order status screen constants : END

    //customer transaction screen constants : START
    this.CUSTOMER_TRANSACTION_SCREEN = "ds::call-center-transaction-list";
    this.CUSTOMER_TRANSACTION_SCREEN_EVENT_ON_LOAD = "customerTransactionLoad";
    this.CUSTOMER_TRANSACTION_SCREEN_EVENT_ORDER_SELECTED = "orderSelected";
    this.CUSTOMER_TRANSACTION_SCREEN_ACTION_RELOAD = "Reload";
    //customer transaction screen constants : END
    
    //edit order screen constants : START    
    this.EDIT_ORDER_SCREEN = "ds::edit-order";
    this.EDIT_ORDER_SCREEN_EVENT_ON_LOAD = "editOrderOnLoad";
    this.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_SUMMARY = "proceedToSummary";
    this.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_PAYMENT = "proceedToPayment";
    this.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_PLACE_ORDER = "placeOrder";
    this.EDIT_ORDER_SCREEN_EVENT_PROCEED_TO_CONFIRM_ORDER = "confirmOrder";
    this.EDIT_ORDER_SCREEN_EVENT_SHIPPING_TAB_SELECTED = "shippingTabSelected";
    this.EDIT_ORDER_SCREEN_EVENT_PAYMENT_TAB_SELECTED = "paymentTabSelected";
    this.EDIT_ORDER_SCREEN_EVENT_SUMMARY_TAB_SELECTED = "summaryTabSelected";
    this.EDIT_ORDER_SCREEN_EVENT_LINES_LOADED_STA = 'staUsedAddressShippingSectionLoaded';
    this.EDIT_ORDER_SCREEN_EVENT_LINES_LOADED_STS = 'stsUsedAddressShippingSectionLoaded';
    this.EDIT_ORDER_SCREEN_EVENT_ADDRESS_PANEL_LOADED = 'onAddressPanelLoaded';
    this.EDIT_ORDER_SCREEN_ACTION_SAVE_ORDER = 'SaveOrder';
    this.EDIT_ORDER_SCREEN_ACTION_RELOAD = "Reload";
    this.EDIT_ORDER_SCREEN_ACTION_PROCEED_TO_PAYMENT = "AckProceedToPayment";
    this.EDIT_ORDER_SCREEN_ACTION_PROCEED_TO_SUMMARY = "AckProceedToSummary";
    this.EDIT_ORDER_SCREEN_ACTION_PLACE_ORDER = "AckPlaceOrder";
    this.EDIT_ORDER_SCREEN_ACTION_CONFIRM_ORDER = "AckConfirmOrder";
    this.EDIT_ORDER_SCREEN_ACTION_SAVE_ADDRESS = 'SaveAddress';
    this.EDIT_ORDER_SCREEN_ACTION_UPDATE_ADDRESS = 'UpdateAddress';
    this.EDIT_ORDER_SCREEN_ACTION_ClOSE_ADDRESS = 'CloseAddress';
    this.PAYMENT_ACCORDIAN_EXPANDED = 'OnPaymentAccordianExpanded';
    this.PAYMENT_LOAD = 'OnPaymentLoad';
    //edit order screen constants : END

    //item search constants : START    
    this.ITEM_SEARCH_SCREEN = "ds::item-search";
    this.ITEM_SEARCH_SCREEN_EVENT_ON_LOAD = "itemSearchOnLoad";
    this.ITEM_SEARCH_SCREEN_EVENT_ADD_ITEM = "addItem";
    this.ITEM_SEARCH_SCREEN_EVENT_ON_ITEM_ADDED = "onItemAdded";
    this.ITEM_SEARCH_SCREEN_EVENT_ADD_ITEM_AND_CHECKOUT = "addItemAndCheckout";
    this.ITEM_SEARCH_SCREEN_EVENT_ON_ITEM_ADDED_AND_CHECKED_OUT = "onAddItemAddedAndCheckedOut";
    this.ITEM_SEARCH_SCREEN_EVENT_CHECKOUT = "checkout";

    this.ITEM_SEARCH_SCREEN_ACTION_ADD_ITEM = "AddItem";
    this.ITEM_SEARCH_SCREEN_ACTION_ADD_ITEM_AND_CHECKOUT = "AddItemAndCheckout";
    this.ITEM_SEARCH_SCREEN_ACTION_ACK_ITEM_ADDED_AND_CHECKED_OUT = "AckAddItemAddedAndCheckedOut";
    this.ITEM_SEARCH_SCREEN_ACTION_ACK_ADD_ITEM = "AckAddItem";
    this.ITEM_SEARCH_SCREEN_ACTION_ACK_ADD_ITEM_AND_CHECKOUT = "AckAddItemAndCheckout";
    this.ITEM_SEARCH_SCREEN_ACTION_ACK_CHECKOUT = "AckCheckout";
    //item search screen constants : END

    //Appeasement popup screen constants : START
    this.APPEASEMENT_POPUP_SCREEN = "ds::apply-appeasement-panel";
    this.APPEASEMENT_POPUP_SCREEN_EVENT_ON_LOAD = "OnAppeasementPopupLoad";
    this.APPEASEMENT_POPUP_SCREEN_ON_APPEASEMENT_APPLIED = "OnAppeasementApplied";
    this.APPEASEMENT_POPUP_ACTION_REFRESH = "Refresh";
    this.APPEASEMENT_POPUP_SCREEN_ON_APPEASEMENT_CANCELED = "CancelAppeasement";
    this.APPEASEMENT_POPUP_SCREEN_REFRESH_ORDER_DATA = "onRefreshOrderData";
    //Appeasement popup screen constants : END

    //coupons popup screen constants : START
    this.COUPONS_POPUP_SCREEN = "ce::order-coupons-popup";
    this.COUPONS_POPUP_SCREEN_EVENT_ON_LOAD = "OnCouponsPopupLoad";
    this.COUPONS_POPUP_SCREEN_ON_COUPONS_APPLIED = "OnCouponsApplied";
    this.COUPONS_POPUP_ACTION_REFRESH = "Refresh";
    this.COUPONS_POPUP_ACTION_CLOSE = "CloseCouponsPopUp";
    //coupons popup screen constants : END

    //AVS popup 
    this.AVS_POPUP_SCREEN = 'ce::order-avs-popup';
    this.AVS_POPUP_SCREEN_EVENT_ON_LOAD = 'OnAVSPopupLoad';
    this.AVS_POPUP_ACTION_SAVE_ORDER = 'SaveOrder';

    //csr dashboard screen constants : START
    this.CALL_CENTER_HOME_SCREEN = "ds::call-center-home-screen";
    this.CALL_CENTER_HOME_SCREEN_ACTION_SHOW_CUSTOMERS_LOADING_MASK = "ShowCustomersLoadingMask";
    this.CALL_CENTER_HOME_SCREEN_ACTION_SHOW_CUSTOMER_RESULTS = "ShowCustomerResults";
    //csr dashboard screen constants : END

    //customer popup screen constants : START
    this.CUSTOMER_POPUP_SCREEN = 'ds::customer-popup';
    this.CUSTOMER_POPUP_SCREEN_EVENT_ON_LOAD = 'onCustomerLoad';
    this.CUSTOMER_POPUP_SCREEN_ACTION_UPDATE_CUSTOMER = 'UpdateCustomer';
    //customer popup screen constants : END

    //override price popup screen constants : START    
    this.OVERRIDE_PRICE_SCREEN = 'ds::override-price';
    this.OVERRIDE_PRICE_POPUP_EVENT_ON_LOAD = 'onOverridePicePopupLoad';
    this.OVERRIDE_PRICE_POPUP_ACTION_OVERRIDE_PRICE = 'OverridePice';
    //override price popup screen constants : END

    //Create Return screen constants : START
    this.CREATE_RETURN_SCREEN = 'ds::create-return';
    this.CREATE_RETURN_SCREEN_EVENT_ON_ORDER_LOAD = 'onOrderLoad';
    this.CREATE_RETURN_SCREEN_EVENT_ON_CONFIRM_ORDER = 'onConfirmOrder';
    this.CREATE_RETURN_SCREEN_EVENT_ADDRESS_PANEL_LOADED = 'onAddressPanelLoaded';
    this.CREATE_RETURN_SCREEN_ACTION_SAVE_ORDER = 'SaveOrder';
    this.CREATE_RETURN_SCREEN_ACTION_ACK_CONFIRM_ORDER = 'AckConfirmOrder';
    this.CREATE_RETURN_SCREEN_ACTION_SAVE_ADDRESS = 'SaveAddress';
    this.CREATE_RETURN_SCREEN_ACTION_UPDATE_SHIP_TO_ADDRESS = 'UpdateShipToAddress';
    this.CREATE_RETURN_SCREEN_ACTION_UPDATE_RETURN_FROM_ADDRESS = 'UpdateReturnFromAddress';
    this.CREATE_RETURN_SCREEN_ACTION_ClOSE_SHIP_TO_TAB_ADDRESS = 'CloseShipToTabAddress';
    this.CREATE_RETURN_SCREEN_ACTION_ClOSE_RETURN_FROM_TAB_ADDRESS = 'CloseReturnFromTabAddress'
    this.CREATE_RETURN_SCREEN_ACTION_ACK_RETURN_FROM_DONE_CLICKED = 'AckDone';
    this.CREATE_RETURN_SCREEN_ACTION_RETURN_CREATED = 'ReturnCreated';
    this.RETURN_TYPE_CHANGE_EVENT = 'ReturnTypeChangeEvent';
    this.CREATE_RETURN_SCREEN_EVENT_ON_DONE_CLICKED = "DoneClicked";
    //Create Return screen constants : END

    //Popups screen constants : START
    this.POPUPS_SCREEN = 'ds::popups';
    this.POPUPS_SCREEN_OPEN = 'OpenPopup';
    this.POPUPS_SCREEN_CLOSE = 'ClosePopup';
    this.POPUPS_SCREEN_REFRESH = 'Reload';
    this.POPUPS_SCREEN_CLOSE_AND_REFRESH = 'ClosePopupAndReload';
    //Popups screen constants : END

    //Window constants : START
    this.WINDOW = 'Window'
    this.WINDOW_RELOAD_URL = 'ReloadURL';
    //Window constants : END

    //Application constants : START
    this.APPLICATION = 'Application'
    this.APPLICATION_ROUTE = 'Route';
    //Application constants : END
}

function RouteConstants() {
    this.CSR_DASHBOARD = '/app/csrdashboard';
    this.CUSTOMER_DASHBOARD = '/app/customerdashboard';  // QueryParams must have either 'CustomerId' or ('FirstName' & 'LastName' & 'Email' & 'Phone')
    this.ITEM_SEARCH = '/app/itemsearch'; // QueryParams can have 'keyword', 'orderId', 'exchangeorder', 'customerId', ('customerFirstName' & 'customerLastName' & 'customerEmail' & 'customerPhone')
    this.ORDER_STATUS = '/app/orderstatus'; // QueryParams must have 'orderId', 'isArchived'
    this.EDIT_ORDER = '/app/editOrder'; // QueryParams must have 'orderId'
    this.CREATE_RETURN = '/app/createreturn' // QueryParams must have 'orderId'
    this.MAIL = '/app/mail'; // QueryParams can have 'caseStatus', 'caseOrigin'
    this.SOCIAL_LISTENING = '/app/socialListening';
    this.CASE_MANAGEMENT = '/app/casemanagement';
}