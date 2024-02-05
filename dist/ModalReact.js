"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var themes = _interopRequireWildcard(require("./themes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Function to create Modulable Modal Component
 * @param {Boolean} param0-1
 * @param {CSSProperties} param2-3-4-5-6-8
 * @param {String} param4-5-7
 * @param {Function} param9
 * @returns {JSX Element}
 */
function ModalReact(_ref) {
  var _colours$backgroundCo, _colours$backgroundCo2, _selectedTheme$styleM, _colours$shadowColor, _selectedTheme$styleM2, _colours$colorText$se, _colours$colorText, _selectedTheme$styleC, _colours$borderHeader, _selectedTheme$styleC2, _colours$headerColorT, _colours$headerColorT2, _selectedTheme$styleC3, _colours$backGroundHe, _colours$backGroundHe2, _selectedTheme$styleC4, _colours$borderButton, _selectedTheme$styleB, _colours$colorTextBut, _colours$colorTextBut2, _colours$backgroundHo, _colours$backgroundHo2, _selectedTheme$styleB2, _colours$colorTextHov, _colours$colorTextHov2, _selectedTheme$styleB3;
  let {
    isOpen,
    themeName,
    isOverlay,
    primary,
    secondary,
    thirdty,
    fourthy,
    styleModalContainer: customContainer,
    styleOverlay: customOverlay,
    styleContainerContent: customContainerContent,
    styleModalTitle: customModalTitle,
    modalTitle,
    contentModal,
    styleButton: customButton,
    textButton,
    styleContainerHeader: customContainerHeader,
    actionOnClose
  } = _ref;
  // Theme selected
  const selectedTheme = themes[themeName] || themes.defaultTheme;

  // State for theme with button for :hover
  const [isButtonHovered, setIsButtonHovered] = (0, _react.useState)(false);
  // Colours defined
  const colours = {
    backgroundContent: {
      primary
    },
    colorText: {
      secondary
    },
    backgroundButton: 'transparent',
    borderButton: "2px solid ".concat(fourthy),
    colorTextButton: {
      secondary
    },
    backgroundHover: {
      thirdty
    },
    colorTextHover: {
      primary
    },
    borderHeader: "2px solid  ".concat(fourthy),
    headerColorText: {
      thirdty
    },
    backGroundHeader: {
      fourthy
    }
  };

  // Default style for the modal with theme and colour background
  const mergedStyleContainer = {
    ...selectedTheme.styleModalContainer,
    backgroundColor: (_colours$backgroundCo = (_colours$backgroundCo2 = colours.backgroundContent) === null || _colours$backgroundCo2 === void 0 ? void 0 : _colours$backgroundCo2.primary) !== null && _colours$backgroundCo !== void 0 ? _colours$backgroundCo : (_selectedTheme$styleM = selectedTheme.styleModalContainer) === null || _selectedTheme$styleM === void 0 ? void 0 : _selectedTheme$styleM.backgroundColor,
    boxSadow: (_colours$shadowColor = colours === null || colours === void 0 ? void 0 : colours.shadowColor) !== null && _colours$shadowColor !== void 0 ? _colours$shadowColor : (_selectedTheme$styleM2 = selectedTheme.styleModalContainer) === null || _selectedTheme$styleM2 === void 0 ? void 0 : _selectedTheme$styleM2.boxShadow,
    ...customContainer
  };
  // Default style Overlay
  const mergedStyleOverlay = {
    ...selectedTheme.styleOverlay,
    ...customOverlay
  };
  // Default style Modal title
  const mergedModalTitle = {
    ...selectedTheme.styleModalTitle,
    ...customModalTitle
  };
  // Default Modal Title
  const defaultModalTitle = ' ';

  // Default style for container of the text content
  const mergedContainerContent = {
    ...selectedTheme.styleContainerContent,
    color: (_colours$colorText$se = (_colours$colorText = colours.colorText) === null || _colours$colorText === void 0 ? void 0 : _colours$colorText.secondary) !== null && _colours$colorText$se !== void 0 ? _colours$colorText$se : (_selectedTheme$styleC = selectedTheme.styleContainerContent) === null || _selectedTheme$styleC === void 0 ? void 0 : _selectedTheme$styleC.color,
    ...customContainerContent
  };
  // Default content text
  const defaultContentText = '{contentModal}';

  // Default style for container to close modal
  const mergedContainerHeader = {
    ...selectedTheme.styleContainerHeader,
    borderBottom: (_colours$borderHeader = colours === null || colours === void 0 ? void 0 : colours.borderHeader) !== null && _colours$borderHeader !== void 0 ? _colours$borderHeader : (_selectedTheme$styleC2 = selectedTheme.styleContainerHeader) === null || _selectedTheme$styleC2 === void 0 ? void 0 : _selectedTheme$styleC2.borderBottom,
    color: (_colours$headerColorT = (_colours$headerColorT2 = colours.headerColorText) === null || _colours$headerColorT2 === void 0 ? void 0 : _colours$headerColorT2.thirdty) !== null && _colours$headerColorT !== void 0 ? _colours$headerColorT : (_selectedTheme$styleC3 = selectedTheme.styleContainerHeader) === null || _selectedTheme$styleC3 === void 0 ? void 0 : _selectedTheme$styleC3.color,
    ...customContainerHeader,
    backgroundColor: (_colours$backGroundHe = (_colours$backGroundHe2 = colours.backGroundHeader) === null || _colours$backGroundHe2 === void 0 ? void 0 : _colours$backGroundHe2.fourthy) !== null && _colours$backGroundHe !== void 0 ? _colours$backGroundHe : (_selectedTheme$styleC4 = selectedTheme.styleContainerHeader) === null || _selectedTheme$styleC4 === void 0 ? void 0 : _selectedTheme$styleC4.backgroundColor
  };
  // Default text button
  const defaultTextButton = 'X';
  // Default style for element button to close modal with hover style
  const mergedStyleButton = {
    ...selectedTheme.styleButton,
    border: (_colours$borderButton = colours === null || colours === void 0 ? void 0 : colours.borderButton) !== null && _colours$borderButton !== void 0 ? _colours$borderButton : (_selectedTheme$styleB = selectedTheme.styleButton) === null || _selectedTheme$styleB === void 0 ? void 0 : _selectedTheme$styleB.border,
    color: (_colours$colorTextBut = (_colours$colorTextBut2 = colours.colorTextButton) === null || _colours$colorTextBut2 === void 0 ? void 0 : _colours$colorTextBut2.secondary) !== null && _colours$colorTextBut !== void 0 ? _colours$colorTextBut : selectedTheme.styleButton.color,
    ...customButton,
    ...(isButtonHovered && {
      ...selectedTheme.styleButtonHover,
      backgroundColor: (_colours$backgroundHo = (_colours$backgroundHo2 = colours.backgroundHover) === null || _colours$backgroundHo2 === void 0 ? void 0 : _colours$backgroundHo2.thirdty) !== null && _colours$backgroundHo !== void 0 ? _colours$backgroundHo : (_selectedTheme$styleB2 = selectedTheme.styleButtonHover) === null || _selectedTheme$styleB2 === void 0 ? void 0 : _selectedTheme$styleB2.backgroundColor,
      color: (_colours$colorTextHov = (_colours$colorTextHov2 = colours.colorTextHover) === null || _colours$colorTextHov2 === void 0 ? void 0 : _colours$colorTextHov2.primary) !== null && _colours$colorTextHov !== void 0 ? _colours$colorTextHov : (_selectedTheme$styleB3 = selectedTheme.styleButtonHover) === null || _selectedTheme$styleB3 === void 0 ? void 0 : _selectedTheme$styleB3.color
    })
  };
  // Function to reset state button hover when clicked
  const handleHoverClick = () => {
    setIsButtonHovered(false);
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, isOverlay && /*#__PURE__*/_react.React.createElement("div", {
    style: mergedStyleOverlay
  }), /*#__PURE__*/_react.React.createElement("div", {
    id: "modalReact",
    style: mergedStyleContainer
  }, /*#__PURE__*/_react.React.createElement("div", {
    style: mergedContainerHeader
  }, /*#__PURE__*/_react.React.createElement("div", {
    style: mergedModalTitle
  }, modalTitle === undefined ? defaultModalTitle : modalTitle), /*#__PURE__*/_react.React.createElement("button", {
    style: mergedStyleButton,
    onClick: () => {
      actionOnClose();
      handleHoverClick();
    },
    onMouseOver: () => setIsButtonHovered(true),
    onMouseOut: () => setIsButtonHovered(false)
  }, textButton === '' || textButton === undefined ? defaultTextButton : textButton)), /*#__PURE__*/_react.React.createElement("div", {
    style: mergedContainerContent
  }, contentModal === '' || contentModal === undefined ? defaultContentText : contentModal)));
}
ModalReact.defaultProps = {
  themeName: 'defaultTheme'
};
ModalReact.propTypes = {
  isOpen: _propTypes.default.bool,
  themeName: _propTypes.default.string,
  primary: _propTypes.default.string,
  secondary: _propTypes.default.string,
  thirdty: _propTypes.default.string,
  fourthy: _propTypes.default.string,
  isOverlay: _propTypes.default.bool,
  styleModalContainer: _propTypes.default.object,
  styleOverlay: _propTypes.default.object,
  styleContainerContent: _propTypes.default.object,
  styleModalTitle: _propTypes.default.object,
  modalTitle: _propTypes.default.string,
  contentModal: _propTypes.default.string,
  styleButton: _propTypes.default.object,
  textButton: _propTypes.default.string,
  styleContainerHeader: _propTypes.default.object,
  actionOnClose: _propTypes.default.func
};
var _default = exports.default = ModalReact;